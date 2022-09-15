import Sequelize from "sequelize";
import models from "./models";
const db = {};

// create your instance of sequelize
const sequelize = new Sequelize(process.env.dbname, process.env.dbusername, process.env.dbpassword, {
    port: 3306,
    host: process.env.dbhost,
    logging: false,
    dialect: 'mysql'
});

// load models
Object.keys(models).forEach((modelName) => {
    const model = models[modelName](sequelize, Sequelize.DataTypes);
    db[modelName] = model;
});

// invoke associations on each of the models
Object.keys(db).forEach((modelName) => {
    if (db[modelName].options.associate) {
        db[modelName].options.associate(db);
    }
});

sequelize.sync().then(() => {}, (err) => {
    console.log("Incorrect Sequelize Db Details Update config details");
    process.exit(0)
});

export default Object.assign({}, db, {
    sequelize,
    Sequelize
});