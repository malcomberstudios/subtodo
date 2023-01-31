import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ITodoItem } from '@subotodo/api-interfaces';

import { ApiService } from './services/api.service';

@Component({
  selector: 'subotodo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private readonly apiService: ApiService){}

  public TodoItems: Observable<ITodoItem[]> = this.apiService.GetTodoItems();

}
