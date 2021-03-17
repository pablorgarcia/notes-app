import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbService } from '../../services/db.service'; // NO se está usando

import { SideNavRightComponent } from '../side-nav-right/side-nav-right.component';


@NgModule({
  declarations: [
    SideNavRightComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [DbService] // NO se está usando
})

export class LayoutModule {}
