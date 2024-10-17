import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Todo extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public completed!: boolean;
}

Todo.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'Todo',
});

export default Todo;
