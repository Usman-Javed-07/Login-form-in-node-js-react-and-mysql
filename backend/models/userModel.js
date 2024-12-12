const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // tokens: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: true },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",

    defaultScope: {
      attributes: { exclude: ["id"] },
    },
    getterMethods: {
      getId: function () {
        return undefined;
      },
    },
  }
);

module.exports = User;
