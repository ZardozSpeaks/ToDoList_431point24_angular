import { Component } from 'angular2/core';
import { Task } from './task.model';

//leaf view "decorator"//

@Component({
  selector: 'task-display',
  inputs: ['task'],
  template: `
    <h3>{{ task.description }}</h3>
  `
})

//leaf controller//

export class TaskComponent {
  public task: Task;
}
