import { NgModule } from '@angular/core';
import { OpenManifestoRoutingModule } from './open-manifesto-routing.module';
import { OpenManifestoPageComponent } from '../components/open-manifesto-page/open-manifesto-page.component';


@NgModule({
  declarations: [OpenManifestoPageComponent],
  imports: [OpenManifestoRoutingModule]
})

export class OpenManifestoModule {}
