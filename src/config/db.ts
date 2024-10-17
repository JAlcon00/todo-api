import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'todos_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '123456',
  {
    host: process.env.DB_HOST || 'mysql',
    dialect: 'mysql',
  }
);

export default sequelize;
