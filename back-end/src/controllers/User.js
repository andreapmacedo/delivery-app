const userService = require('../services/User');

const userController = {
  getAllUsers: async (req, res) => {
    const { role } = req.user;
    if (role !== 'administrator') {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  },
  getAllSellers: async (_req, res) => {
    const sellers = await userService.getAllSellers();
    res.status(200).json(sellers);
  },
};

module.exports = userController;