import { DataTypes } from "sequelize";
import { sequelized } from "../config/db.config.js";


const Todo = sequelized.define(
    'Todo',
    {
        // Model attributes are defined here
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        // Sequelize automatically adds `id`, `createdAt`, and `updatedAt` by default
    },
    {
        // Other model options go here
        tableName: 'todos', // Explicitly set table name if different from default pluralization
    }
);

export default Todo