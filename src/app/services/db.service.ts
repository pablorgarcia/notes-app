import { Injectable } from '@angular/core';
import { DB } from '../interfaces/db';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  public homeDB: DB[] = [
    {
      title: 'titulo home 1',
      text: [
        'texo home 1',
        'texto home 2'
      ]
    },
    {
      title: 'titulo home 2',
      text: [
        'texo home 3',
        'texto home 4'
      ]
    },
  ];


  public angularDB: DB[] = [
    {
      title: 'titulo angular 1',
      text: [
        'texo angular 1',
        'texto angular 2'
      ]
    },
    {
      title: 'titulo angular 2',
      text: [
        'texo angular 3',
        'texto angular 4'
      ]
    },
  ];


  public gitDB: DB[] = [
    {
      title: 'titulo git 1',
      text: [
        'texo git 1',
        'texto git 2'
      ]
    },
    {
      title: 'titulo git 2',
      text: [
        'texo git 3',
        'texto git 4'
      ]
    },
  ];

  constructor() {}

  public getHomeDB(): DB[] { return this.homeDB; }

  public getAngularDB(): DB[] { return this.angularDB; }

  public getGitDB(): DB[] { return this.gitDB; }

}
