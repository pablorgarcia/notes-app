import { NgModule } from '@angular/core';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularPageComponent } from '../components/angular-page/angular-page.component';


@NgModule({
  declarations: [AngularPageComponent],
  imports: [AngularRoutingModule]
})

export class AngularModule {}
