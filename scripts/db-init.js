/**
 * scripts/db-init.js
 *
 * Creates the MySQL database tables.
 * Run ONCE before starting the app:
 *
 *   node scripts/db-init.js
 *
 * Written in CommonJS so it runs directly with Node (no transpile needed).
 */

const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config({ path: ".env.local" });

// ── Validate env vars ─────────────────────────────────────────────────────────
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST = "localhost",
  DB_PORT = 3306,
} = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD) {
  console.error(
    "❌ Missing env vars. Make sure DB_NAME, DB_USER, DB_PASSWORD are set in .env.local",
  );
  process.exit(1);
}

// ── Connect ───────────────────────────────────────────────────────────────────
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: "mysql",
  logging: console.log,
});

// ── Define schema (mirrors models/Lead.js) ────────────────────────────────────
const Lead = sequelize.define(
  "Lead",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    source_page: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("new", "contacted", "qualified", "lost"),
      defaultValue: "new",
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    tableName: "leads",
    timestamps: true,
    underscored: true,
    indexes: [
      { fields: ["email"] },
      { fields: ["status"] },
      { fields: ["created_at"] },
    ],
  },
);

// ── Sync ──────────────────────────────────────────────────────────────────────
async function init() {
  try {
    console.log("\n🔌 Connecting to MySQL...");
    await sequelize.authenticate();
    console.log("✅ Connection successful.\n");

    console.log("📦 Creating tables...");
    await sequelize.sync({ alter: true });
    console.log("✅ Table 'leads' is ready.\n");

    const [tables] = await sequelize.query("SHOW TABLES;");
    console.log(
      "📋 Tables in database:",
      tables.map((r) => Object.values(r)[0]),
    );
  } catch (err) {
    console.error("\n❌ Error:", err.message);
    process.exit(1);
  } finally {
    await sequelize.close();
    console.log("\n🔒 Connection closed.");
  }
}

init();
