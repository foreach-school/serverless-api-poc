import User from '../model/User';

export class UserRepository {
  static async findByUsername(username: String) {
    return await User.findOne({
      where: {
        username: username,
      },
    });
  }
}
