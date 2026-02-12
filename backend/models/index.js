import Todo from "./todo.model.js";
import { sequelized } from "../config/db.config.js";
import { Sequelize } from "sequelize";
const db = {
    Sequelize: sequelized,  // the instance
    Todo: Todo              // the model
}   

export default db
