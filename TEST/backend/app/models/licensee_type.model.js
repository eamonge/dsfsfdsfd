module.exports = (sequelize, Sequelize) => {
    const LicenseeType = sequelize.define("licensee_type", {
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      description: {
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
    }, {timestamps: false});
  
    return LicenseeType;
  };
  