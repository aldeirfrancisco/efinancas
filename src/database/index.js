import Sequelize from 'sequelize';
import configDatabase from '../config/database';
import Usuario from '../app/models/Usuario';
import Pessoa from '../app/models/Pessoa';
import Lancamento from '../app/models/Lancamento';

const models = [Usuario, Pessoa, Lancamento];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);

    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associete && model.associete(this.connection.models)
    );
  }
}
export default new Database();
