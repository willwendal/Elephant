'use-strict'

module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('events', {
    _id: {type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true},
    date: {type: DataTypes.STRING, allowNull: false},
    occasion: {type: DataTypes.STRING, allowNull: false},
    location: {type: DataTypes.STRING, allowNull: false},
    
  },{
    timestamps: false,
  });
  return event;
}