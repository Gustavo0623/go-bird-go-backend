'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  console.log('test')
  class Map extends Model {
  }

  
  Map.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Projectiles_placement: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
    },
    Coins_placement: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
    },
    Map_Name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Map',
    tableName: 'game_map',
    timestamps: false
  })

  return Map;
};