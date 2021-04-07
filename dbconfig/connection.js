const mysql2 = require("mysql2");
const dbconfig = require("./dbconf");
const sequelize = require("sequelize");

const Db = new sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  dialect: "mysql",
  dialectModule: mysql2,
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});
Db.authenticate()
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("Db connection error", error));

module.exports = Db;
