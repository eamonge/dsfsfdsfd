module.exports = (sequelize, Sequelize) => {
    const License = sequelize.define("license", {
      type_id: {
        type: Sequelize.INTEGER
      },
      regulator_id: {
        type: Sequelize.INTEGER
      },
      fee_id: {
        type: Sequelize.INTEGER
      },
      application_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      chapter: {
        type: Sequelize.INTEGER
      },
      date_issued: {
        type: Sequelize.DATE
      },
      license_key: {
        type: Sequelize.STRING
      },
      expiration: {
        type: Sequelize.DATE
      },
      renewal_doc_id: {
        type: Sequelize.INTEGER
      },
      renewal: {
        type: Sequelize.STRING
      },
      license_identifier: {
        type: Sequelize.STRING
      },
      issuer_id: {
        type: Sequelize.STRING
      },
      jurisdiction: {
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
  
    return License;
  };
  