import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import Pick from "./picks.models";
import Person from "./person.models";

const Comment = sequelize.define("comment",{
    text: {
        type: DataTypes.STRING,
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
},{updatedAt: false})

Pick.hasMany(Comment)
Person.hasOne(Comment)

export default Comment