const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Panda = sequelize.define("panda", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  birthday: Sequelize.DATE,
  imageUrl : Sequelize.STRING,
  address:Sequelize.STRING,
  personality:Sequelize.STRING
});

module.exports = Panda;
