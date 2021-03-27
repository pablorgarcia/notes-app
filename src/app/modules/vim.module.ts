import { NgModule } from '@angular/core';
import { VimRoutingModule } from './vim-routing.module';
import { VimPageComponent } from '../components/vim-page/vim-page.component';


@NgModule({
  declarations: [VimPageComponent],
  imports: [VimRoutingModule]
})

export class VimModule {}
