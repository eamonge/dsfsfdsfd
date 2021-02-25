module.exports = (sequelize, Sequelize) => {
    const LicenseType = sequelize.define("license_type", {
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
  
    return LicenseType;
  };
  