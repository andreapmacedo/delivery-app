const crypto = require('crypto');
const { User } = require('../database/models');

const loginService = async (email, password) => {
  console.log(password);
  const criptoPass = crypto.createHash('md5').update(password).digest('hex');
  const getUserById = await User.findOne({ where: { email, password: criptoPass } });

  console.log(criptoPass, 'password');

  return getUserById;
};

module.exports = loginService;
