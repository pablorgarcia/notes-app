import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';

import { AngularDB } from '../../interfaces/angular-db';

import { AngularDbService } from '../../services/angular-db.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  private state: RouterState;
  private currentUrl: string = '';

  public title: any;
  public data: any;
/*
  data: AngularDB;
  title: AngularDB;
*/

  constructor(
    private router: Router,
    public angularDbService: AngularDbService
    ) {
    this.state = router.routerState;
    this.currentUrl = this.state.snapshot.url;
    console.log('state',this.currentUrl);
  }

  ngOnInit(): void {

    switch (this.currentUrl) {
      case '/angular':
        this.data = 'ANGULAR';
        break;
      case '/git':
        this.data = 'GIT';
        break;
      default:
        this.data = 'HOME';
        break;
    }

    this.data = this.angularDbService.angularDB;
    //console.log(this.data);
    //this.title = this.data[0].title;
  }

}
