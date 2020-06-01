import Sequelize from 'sequelize';
import configDatabase from '../config/database';
import Usuario from '../app/models/Usuario';

const models = [Usuario];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);

    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
