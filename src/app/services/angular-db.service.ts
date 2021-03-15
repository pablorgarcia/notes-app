import { Injectable } from '@angular/core';
import { AngularDB } from '../interfaces/angular-db';

@Injectable({
  providedIn: 'root'
})

export class AngularDbService {

  public angularDB: AngularDB[] = [
    {
      title: 'titulo01',
      text: [
        'texo11',
        'texto12'
      ]
    },
    {
      title: 'titulo02',
      text: [
        'texo21',
        'texto22'
      ]
    },
  ];

  constructor() {}

}
