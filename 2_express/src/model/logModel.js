import db from "./index";

export default function Logs() {
  return db.connection.define("logs", {
    id: {
      type: db.Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    endpoint: {
      type: db.Sequelize.STRING,
    },
    parameter: {
      type: db.Sequelize.STRING,
    },
    accessAt: {
      type: db.Sequelize.DATE,
    }
  },{
    timestamps: false,
  });
}
