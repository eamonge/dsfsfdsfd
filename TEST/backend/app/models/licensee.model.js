module.exports = (sequelize, Sequelize) => {
    const Licensee = sequelize.define("licensee", {
      type_id: {
        type: Sequelize.INTEGER
      },
      license_id: {
        type: Sequelize.INTEGER
      },
      requirements_id: {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      date_licensed: {
        type: Sequelize.DATE
      },
      notes: {
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
  
    return Licensee;
  };
  