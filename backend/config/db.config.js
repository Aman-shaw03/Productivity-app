import { Sequelize } from 'sequelize';



// The URL from your docker-compose.yml
const DB_URL =
    process.env.DB_URL || 'postgres://aman:secretpassword@localhost:5432/default_database';

export const sequelized = new Sequelize(DB_URL, {
    dialect: 'postgres',
    logging: false,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
});

