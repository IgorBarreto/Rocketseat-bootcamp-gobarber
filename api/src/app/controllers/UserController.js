import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;
    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const { id, name, provider } = await User.create(req.body);
    return res.json({ id, name, email, provider });
  }
}

export default new UserController();
