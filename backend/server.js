import express from 'express';
import { Sequelize } from 'sequelize';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// The URL from your docker-compose.yml
const DB_URL =
    process.env.DB_URL || 'postgres://aman:secretpassword@localhost:5432/default_database';

// Initialize Sequelize INSIDE startServer to avoid connection during module load
let sequelized;

const startServer = async () => {
    let retries = 5;
    while (retries > 0) {
        try {
            // Create Sequelize instance ONLY when we're ready to connect
            sequelized = new Sequelize(DB_URL, {
                dialect: 'postgres',
                logging: false,
                pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
            });

            await sequelized.authenticate();
            console.log('--- DATABASE CONNECTED ---');
            await sequelized.sync({ alter: true });

            // Start Express ONLY after successful connection
            app.listen(PORT, () => {
                console.log(`🚀 Server is live at http://localhost:${PORT}`);
            });
            break;
        } catch (err) {
            console.error(`❌ Connection failed. Retries left: ${retries - 1}`);
            console.error(`Error: ${err.message}`);
            retries -= 1;
            if (retries === 0) process.exit(1);
            await new Promise((res) => setTimeout(res, 5000)); // Wait 5s before retry
        }
    }
};

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Hello from Express Backend',
        status: 'Server running + Databse running',
        timestamp: new Date(),
    });
});

app.get('/new', (req, res) => {
    res.json({ message: 'New route test' });
});

startServer();
