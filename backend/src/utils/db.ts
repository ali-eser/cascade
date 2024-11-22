import { Sequelize } from "sequelize-typescript";

import {
    DATABASE_HOST,
    DATABASE_PASSWORD,
    DATABASE_USER,
    DATABASE_NAME,
    DATABASE_PORT
} from "./config";

const sequelize = new Sequelize(
    `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`, {
        dialect: "postgres"
    }
);

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ logging: console.log });
        console.log(`Connected to database: "${DATABASE_NAME}"`);
    } catch (error) {
        console.error(error);
        return process.exit(1);
    }
    return null;
}

export default connectToDatabase;