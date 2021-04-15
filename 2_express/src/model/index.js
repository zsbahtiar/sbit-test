import Sequelize from "sequelize";
import config from "../../config";

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
  ...config.db,
});

const db = {
  Sequelize,
  connection: sequelize,
};

export default db;