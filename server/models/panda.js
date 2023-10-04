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
  birthday: Sequelize.DATEONLY,
  gender:Sequelize.STRING,
  imageUrl : Sequelize.STRING,
  address:Sequelize.STRING,
  personality:Sequelize.STRING,
}, {
  tableName: 'panda'  // 이렇게 tableName 옵션을 추가하지 않으면 pandas 복수로 테이블이 생성됨
});

module.exports = Panda;
