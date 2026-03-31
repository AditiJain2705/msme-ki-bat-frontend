import { Sequelize } from "sequelize";

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT) || 3306;
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
// Clear error if env vars are missing
if (!DB_NAME || !DB_USER || !DB_PASSWORD) {
  throw new Error(
    `❌ Missing DB env vars. Got: DB_NAME=${DB_NAME}, DB_USER=${DB_USER}, DB_PASSWORD=${
      DB_PASSWORD ? "****" : "undefined"
    }. Check your .env.local file.`,
  );
}

const globalForSequelize = globalThis;

if (!globalForSequelize.sequelize) {
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
  });
}

const sequelize = globalForSequelize.sequelize;
export default sequelize;
