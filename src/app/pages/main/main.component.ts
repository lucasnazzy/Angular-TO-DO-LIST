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

  addTask() {
    const newTask: any = {
      id: this.tasks.length + 1,
      title: this.task,
      completed: false,
    };

    this.tasks.push(newTask);
    this.toastr.success('Task criada com sucesso.', 'Task criada.');
    this.task = null;
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  clearAllTasks() {
    this.tasks = [];
    this.task = null;
    this.toastr.success('Tasks removidas com sucesso.', 'Tasks removidas.');
  }

  onTaskCompleted(task: TTask) {
    this.toastr.success(`Task ${task.id} concluída com sucesso. `);
  }

  removeTask(task: TTask) {
    let indexToRemove = this.tasks.findIndex((item) => item.id === task.id);
    this.tasks.splice(indexToRemove, 1);

    this.toastr.success(`Task ${task.id} removida com sucesso. `);
  }
}