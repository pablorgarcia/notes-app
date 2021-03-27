import { NgModule } from '@angular/core';
import { GitRoutingModule } from './git-routing.module';
import { GitPageComponent } from '../components/git-page/git-page.component';


@NgModule({
  declarations: [GitPageComponent],
  imports: [GitRoutingModule]
})

export class GitModule {}
