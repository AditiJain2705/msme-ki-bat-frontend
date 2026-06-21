import { Sequelize } from "sequelize";

const DB_NAME = process.env.MYSQLDATABASE;
const DB_USER = process.env.MYSQLUSER;
const DB_PASSWORD = process.env.MYSQLPASSWORD;
const DB_HOST = process.env.MYSQLHOST;
const DB_PORT = Number(process.env.MYSQLPORT) || 3306;

// Only log in development
if (process.env.NODE_ENV === "development") {
  console.log("Database configuration loaded");
}

const globalForSequelize = globalThis;

if (!globalForSequelize.sequelize) {
  if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST) {
    throw new Error("Missing Railway MySQL environment variables.");
  }

  globalForSequelize.sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      connectTimeout: 30000,
    },
  });
}

const sequelize = globalForSequelize.sequelize;

export default sequelize;
