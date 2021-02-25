const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.filing = require("./filing.model.js")(sequelize, Sequelize);
db.licenseType = require("./license_type.model.js")(sequelize, Sequelize);
db.license = require("./license.model.js")(sequelize, Sequelize);
db.licenseeType = require("./licensee_type.model.js")(sequelize, Sequelize);
db.licensee = require("./licensee.model.js")(sequelize, Sequelize);
db.profile = require("./profile.model.js")(sequelize, Sequelize);
db.regulator = require("./regulator.model.js")(sequelize, Sequelize);

module.exports = db;
