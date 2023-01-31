import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { ITodoItem } from '@subotodo/api-interfaces';

const shitData: ITodoItem[] = [
  {
    completed: false,
    createdBy: 'Me',
    createdDate: new Date(),
    id: '1',
    modifiedBy: 'Me',
    modifiedDate: new Date(),
    tags: [],
    title: 'My First todo',
    description: '',
    children: [
      {
        completed: false,
        createdBy: 'Me',
        createdDate: new Date(),
        id: '4',
        modifiedBy: 'Me',
        modifiedDate: new Date(),
        tags: ['high priority'],
        title: 'My First child todo item',
        description: 'Blah blah blah',
        children: [
          {
            completed: true,
            createdBy: 'Me',
            createdDate: new Date(),
            id: '4',
            modifiedBy: 'Me',
            modifiedDate: new Date(),
            tags: ['high priority'],
            title: 'My second nested child todo item',
            description: 'Blah blah blah',
          }
        ]
      },
    ],
  },
  {
    completed: true,
    createdBy: 'Me',
    createdDate: new Date(),
    id: '2',
    modifiedBy: 'Me',
    modifiedDate: new Date(),
    tags: ['completed'],
    title: 'My Second todo',
    description: `I'm complete`,
  },
  {
    completed: false,
    createdBy: 'Me',
    createdDate: new Date(),
    id: '3',
    modifiedBy: 'Me',
    modifiedDate: new Date(),
    tags: ['new word'],
    title: 'My third todo',
    description: `This is some crap to put in the description`,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public GetTodoItems(): Observable<ITodoItem[]> {
    return of(shitData);
  }
}
