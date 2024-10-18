
import { Request, Response } from 'express';
import Todo from '../models/todo';

// Obtener todos los elementos de la lista de tareas|GET
export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las tareas' });
  }
};

// Obtener un elemento de la lista de tareas por su ID|GET
export const getTodoById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la tarea' });
  }
};

// Crear un nuevo elemento en la lista de tareas|POST
export const createTodo = async (req: Request, res: Response): Promise<void> => {
  const { title, description } = req.body;
  try {
    const todo = await Todo.create({ title, description });
    res.status(201).json(todo);
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    res.status(500).json({ message: 'Error al crear la tarea', error: (error as Error).message });
  }
};

// Actualizar un elemento de la lista de tareas por su ID|PUT
export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      todo.title = title;
      todo.description = description;
      await todo.save();
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la tarea' });
  }
};

// Eliminar un elemento de la lista de tareas por su ID|DELETE
export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.destroy();
      res.status(200).json({ message: 'Tarea eliminada' });
    } else {
      res.status(404).json({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la tarea' });
  }
};







