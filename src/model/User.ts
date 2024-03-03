import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';

class User extends Model {
  public username: string;
  public password: string;
}

User.init(
  {
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: 'test',
    tableName: 'user',
    timestamps: false,
  }
);
User.removeAttribute('id');

export default User;
