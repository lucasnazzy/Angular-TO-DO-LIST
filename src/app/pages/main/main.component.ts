import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TTask } from 'src/app/models/tasks';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public task: string | null = null;
  public tasks: TTask[] = [];
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  public addTask(): void {
    if (this.isNullOrEmpty(this.task)) {
      this.toastr.error('Por favor, preencha o campo', 'Erro.');
      this.task = null;
      return;
    }

    const newTask: any = {
      id: this.tasks.length + 1,
      title: this.task,
      completed: false,
    };

    this.tasks.push(newTask);
    this.toastr.success('Task criada com sucesso.', 'Task criada.');
    this.task = null;
  }

  public onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  public clearAllTasks(): void {
    this.tasks = [];
    this.task = null;
    this.toastr.success('Tasks removidas com sucesso.', 'Tasks removidas.');
  }

  public onTaskCompleted(task: TTask): void {
    this.toastr.success(`Task ${task.id} concluída com sucesso. `);
  }

  public removeTask(task: TTask): void {
    let indexToRemove = this.tasks.findIndex((item) => item.id === task.id);
    this.tasks.splice(indexToRemove, 1);

    this.toastr.success(`Task ${task.id} removida com sucesso. `);
  }

  public isNullOrEmpty(item: string | null): boolean {
    return item === null || item === undefined || item === '';
  }
}
