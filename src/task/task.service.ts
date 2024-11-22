import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { Task } from '.prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  // Obtener todas las tareas
  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany(); // Encuentra todas las tareas
  }

  // Obtener una tarea por ID
  async getTaskById(id: number): Promise<Task> {
    return this.prisma.task.findUnique({
      where: { id }, // Busca la tarea con el ID único
    });
  }

  // Crear una nueva tarea
  async createTask(data: Omit<Task, 'id'>): Promise<Task> {
    // Excluir 'id' ya que se autogenera
    return this.prisma.task.create({
      data, // Los datos de la tarea a crear
    });
  }

  // Actualizar una tarea por ID
  async updateTask(id: number, data: Partial<Omit<Task, 'id'>>): Promise<Task> {
    // Permitir actualización parcial
    return this.prisma.task.update({
      where: { id }, // Busca la tarea con el ID
      data, // Datos actualizados
    });
  }

  // Eliminar una tarea por ID
  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: { id }, // Busca la tarea con el ID
    });
  }

  // Marcar como completada una tarea
  async markTaskAsComplete(id: number): Promise<Task> {
    return this.prisma.task.update({
      where: { id }, // Busca la tarea con el ID
      data: { completed: true }, // Marca la tarea como completada
    });
  }

  // Marcar como incompleta una tarea
  async markTaskAsIncomplete(id: number): Promise<Task> {
    return this.prisma.task.update({
      where: { id }, // Busca la tarea con el ID
      data: { completed: false }, // Marca la tarea como incompleta
    });
  }
}
