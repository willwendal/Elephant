'use-strict'

//  \l - list databases
//  \c - connect to database
//  \dt - list tables
//  SELECT * FROM table_name;
//  TRUNCATE table_name; - delete all rows

const fs = require('fs');
const path = require('path')
const Sequelize = require('sequelize');
require('dotenv').config()


let reqPath = path.join(__dirname, './models');

const config = {
  host: process.env.HOST_ID,
  dialect: process.env.DIALECT_ID,
  port: process.env.PORT_DB
}

const sequelize = new Sequelize( process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, config);
db = {};

const files = fs.readdirSync(reqPath);


for (const file of files) {
  if (file !== 'index.js' && file.slice(-3) === '.js') {
    const model = require(path.join(reqPath, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;