import { Sequelize } from "sequelize-typescript";
import User from "../models/user";
import Item from "../models/item";
import Comment from "../models/comment";

import {
  DATABASE_HOST,
  DATABASE_PASSWORD,
  DATABASE_USER,
  DATABASE_NAME,
  DATABASE_PORT
} from "./config";

console.log("Starting DB");

const sequelize = new Sequelize(
  `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`, {
    dialect: "postgres",
    logging: false,
    models: [User, Item, Comment]
  }
);

console.log("Database models added: ", sequelize.models);

User.hasMany(Item);
User.hasMany(Comment);
Comment.belongsTo(User);
Item.hasMany(Comment);
Item.belongsTo(User);

User.sync({alter: true}).then(r => console.log(r));
Item.sync({alter: true}).then(r => console.log(r));
Comment.sync({alter: true}).then(r => console.log(r));

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to database: "${DATABASE_NAME}"`);
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
  return null;
}

export { sequelize, User, Item, Comment };