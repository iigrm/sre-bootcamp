const query = require("../utils/conection");

// constructor
export const User = function (user) {
  this.username = user.username;
  this.salt = user.salt;
  this.role = user.role;
};

User.loginUser = async (username, password) => {
  const user = await query(
    `SELECT username, salt, role, password FROM users  where  username = ? and password = sha2(concat(?,salt),512)`,
    [username, password]
  );

  return user;
};
