import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav-right',
  templateUrl: './side-nav-right.component.html',
  styleUrls: ['./side-nav-right.component.scss']
})

export class SideNavRightComponent implements OnInit {

  //@Input() item: string;
  item: string = 'HIJO';

  constructor() {}

  ngOnInit(): void {}

}
