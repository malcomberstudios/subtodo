import {
  Component,
  Input,
} from '@angular/core';

import { ITodoItem } from '@subotodo/api-interfaces';

@Component({
  selector: 'subotodo-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  
  @Input() TodoItems: ITodoItem[] = [];

}
