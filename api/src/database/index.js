import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connections = Sequelize(databaseConfig);
    models.map(model => model.init(this.connections));
  }
}
export default new Database();
