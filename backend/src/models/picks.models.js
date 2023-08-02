import { DataTypes } from "sequelize";
import Person from "./person.models";
import sequelize from '../db/connection'

const Pick = sequelize.define("Picks",{
    id : {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull : false
    },
    path: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},{
    updatedAt: false
}
)

Person.hasOne(Pick)
Pick.belongsTo(Person)

export default Pick