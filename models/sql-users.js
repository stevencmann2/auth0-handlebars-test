module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      // Giving the Author model a name of type STRING
      id: DataTypes.STRING,
      nickname: DataTypes.STRING,
      email: DataTypes.STRING
    });
  
    return User;
  };
  