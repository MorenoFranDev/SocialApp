import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import Person from "./person.models";

const Follows = sequelize.define("Follows",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true 
    }
},{timestamps:false})

Person.belongsToMany(Person, { as: 'follow' ,through: Follows,foreignKey: 'PersonId' });
Person.belongsToMany(Person, { as: 'follower' ,through: Follows,foreignKey:'FollowId' });


export default Follows