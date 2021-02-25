module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("profile", {
      address_id: {
        type: Sequelize.INTEGER
      },
      phone_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      licensee_id: {
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      ssn: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.STRING
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
  
    return Profile;
  };
  