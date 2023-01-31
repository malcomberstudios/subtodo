import { DIALOG_DATA } from '@angular/cdk/dialog';
import {
  Component,
  Inject,
} from '@angular/core';

import { ITodoItem } from '@subotodo/api-interfaces';

@Component({
  selector: 'subotodo-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.scss'],
})
export class EditTodoItemComponent {
  constructor(@Inject(DIALOG_DATA) public data: ITodoItem) {}

  public NewTag = '';

  public AddNewTag(event: KeyboardEvent): void {
    event.preventDefault();
    if (event.key !== 'Enter') {
      return;
    }

    const newTag = this.NewTag;

    this.data.tags.push(newTag);

    this.NewTag = '';
  }

  public RemoveTag(index: number): void{
    const items = [...this.data.tags];
    items.splice(index, 1);
    this.data.tags = items;
  }
}
