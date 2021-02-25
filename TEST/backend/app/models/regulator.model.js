module.exports = (sequelize, Sequelize) => {
    const Regulator = sequelize.define("regulator", {
      type_id: {
        type: Sequelize.INTEGER
      },
      profile_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      regulator_key: {
        type: Sequelize.STRING
      },
      jurisdiction : {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.DATE
      },
      modified: {
        type: Sequelize.DATE
      },
      deleted: {
        type: Sequelize.DATE
      },
      active_count: {
        type: Sequelize.DATE
      },
    }, {timestamps: false});
  
    return Regulator;
  };
  