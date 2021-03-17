import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';

import { DB } from '../../interfaces/db';

import { DbService } from '../../services/db.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  private state: RouterState;
  public currentUrl: string = 'YO SOY TU PADRE';

  public title: string = '';
  public db: DB[] = [];

  currentItem: string = '';


  constructor(
    private router: Router,
    public dbService: DbService
    )
  {
    this.state = router.routerState;
    this.currentUrl = this.state.snapshot.url;
    //console.log('state',this.currentUrl);
  }

  ngOnInit(): void {

    switch (this.currentUrl) {
      case '/angular':
        this.title = 'Angular';
        this.db = this.dbService.getAngularDB();
        break;
      case '/git':
        this.title = 'Guía rápida para Git';
        this.db = this.dbService.getGitDB();
        break;
      default:
        this.title = 'Welcome';
        this.db = this.dbService.getHomeDB();
        break;
    }

    console.log('QUE HAY EN DATA', this.db);

  }

}
