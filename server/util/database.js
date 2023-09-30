const Sequelize = require('sequelize');
const sequelize = new Sequelize('panda-dictionary', 'admin1', 'NewPassword1!', { // for mac
// const sequelize = new Sequelize('panda-dictionary', 'root', 'admin1234', {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: '3306',
  timezone: '-07:00'
});

module.exports = sequelize;
