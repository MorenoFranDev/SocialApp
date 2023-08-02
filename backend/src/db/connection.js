import { Sequelize } from "sequelize";

const  sequelize = new Sequelize('unsplash', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize