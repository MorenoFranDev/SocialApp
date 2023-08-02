import { DataTypes,Sequelize } from "sequelize";
import sequelize from '../db/connection'

const Person = sequelize.define("Person",{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    profileImg: {
        type: DataTypes.TEXT
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
},{
    timestamps: false
}
)

export default Person