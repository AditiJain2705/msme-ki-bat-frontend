// import { DataTypes } from "sequelize";
// import sequelize from "../lib/db.js";

// const Lead = sequelize.define(
//   "Lead",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//       validate: {
//         notEmpty: { msg: "Name is required" },
//         len: {
//           args: [2, 100],
//           msg: "Name must be between 2 and 100 characters",
//         },
//       },
//     },
//     email: {
//       type: DataTypes.STRING(150),
//       allowNull: false,
//       validate: {
//         notEmpty: { msg: "Email is required" },
//         isEmail: { msg: "Must be a valid email address" },
//       },
//     },
//     number: {
//       type: DataTypes.STRING(20),
//       allowNull: false,
//       validate: {
//         notEmpty: { msg: "Phone number is required" },
//         is: {
//           args: /^[+\d\s\-().]{7,20}$/,
//           msg: "Must be a valid phone number",
//         },
//       },
//     },
//     company_name: {
//       type: DataTypes.STRING(150),
//       allowNull: false,
//       validate: {
//         notEmpty: { msg: "Company name is required" },
//       },
//     },
//     message: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//     source_page: {
//       type: DataTypes.STRING(255),
//       allowNull: true,
//       comment: "URL or page where the form was submitted from",
//     },
//     status: {
//       type: DataTypes.ENUM("new", "contacted", "qualified", "lost"),
//       defaultValue: "new",
//     },
//     ip_address: {
//       type: DataTypes.STRING(45),
//       allowNull: true,
//     },
//   },
//   {
//     tableName: "leads",
//     timestamps: true,
//     underscored: true, // createdAt → created_at in DB
//     indexes: [
//       { fields: ["email"] },
//       { fields: ["status"] },
//       { fields: ["created_at"] },
//     ],
//   },
// );

// export default Lead;
