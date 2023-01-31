import { Dialog } from '@angular/cdk/dialog';
import {
  Component,
  Input,
} from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { ITodoItem } from '@subotodo/api-interfaces';

import {
  EditTodoItemComponent,
} from '../edit-todo-item/edit-todo-item.component';

@Component({
  selector: 'subotodo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {

  /**
   *
   */
  constructor(private readonly dialog: Dialog) {}

  @Input() Item!: ITodoItem;
  @Input() IsChild = false;

  public faPencil = faPencil;

  public async EditTodoItem(): Promise<void>{
    this.dialog.open(EditTodoItemComponent, {
      width: '80%',
      data: this.Item
    });

    const result = await lastValueFrom(this.dialog.afterOpened);

    if(result){
      console.dir('Whoop Whoop');
    }


  }
}
