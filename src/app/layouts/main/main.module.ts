import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { SideNavRightComponent } from '../side-nav-right/side-nav-right.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    MainComponent,
    SideNavRightComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainModule
  ]
})

export class MainModule {}
