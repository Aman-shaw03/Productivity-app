import { Sequelize } from 'sequelize';

/**
 * Sequelize Instance Configuration for PostgreSQL 15
 *
 * This creates a connection pool to PostgreSQL database.
 * Environment variables are loaded from .env file via dotenv/config in server.js
 */
// export const sequelize = new Sequelize({


//     // Database connection details - loaded from .env
//     host: process.env.HOST || 'localhost', // PostgreSQL server address
//     port: parseInt(process.env.PORT_DB || '5432'), // PostgreSQL port (use PORT_DB to avoid conflict with Express PORT)
//     username: process.env.DB_USER || 'aman', // Database user created in docker-compose
//     password: process.env.DB_PASSWORD || 'secretpassword', // Database user password
//     database: process.env.DATABASE || 'todo_db', // Database name to connect to

//     // Dialect configuration
//     dialect: 'postgres', // Using PostgreSQL

//     // Connection pool settings for better performance
//     pool: {
//         max: 10, // Maximum connections in pool
//         min: 2, // Minimum connections to maintain
//         acquire: 30000, // Wait max 30 seconds to acquire a connection
//         idle: 10000, // Connections idle for 10 seconds are released
//     },

//     // Logging configuration
//     logging: false, // Set to console.log to see SQL queries, or false to disable

//     // SSL/TLS configuration
//     // Set to false for local development, true for production
//     ssl: false,

//     // Sequelize-specific options
//     define: {
//         timestamps: true, // Automatically add createdAt and updatedAt fields
//         underscored: false, // Use camelCase (not snake_case) for column names
//     },
// });

const databaseUrl = process.env.DB_URL

export const sequelized = new Sequelize('postgres://aman:secretpassword@database:5432/default_database', {
    dialect: 'postgres',
    ssl: false,
    pool: {
        max: 10,
        min: 2,
        acquire: 30000,
        idle: 10000,
    },
    define: {
        timestamps: true,
        underscored: false,
    },
});