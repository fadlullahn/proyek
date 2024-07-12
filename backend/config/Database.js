import { Sequelize } from "sequelize";

const db = new Sequelize("proyek", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
