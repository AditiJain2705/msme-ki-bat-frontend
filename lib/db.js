import { Sequelize } from "sequelize";

const globalForSequelize = globalThis;

function createSequelize() {
  const DB_NAME = process.env.MYSQLDATABASE;
  const DB_USER = process.env.MYSQLUSER;
  const DB_PASSWORD = process.env.MYSQLPASSWORD;
  const DB_HOST = process.env.MYSQLHOST;
  const DB_PORT = Number(process.env.MYSQLPORT) || 3306;

  return new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
}

if (!globalForSequelize.sequelize) {
  globalForSequelize.sequelize = createSequelize();
}

const sequelize = globalForSequelize.sequelize;

export default sequelize;
