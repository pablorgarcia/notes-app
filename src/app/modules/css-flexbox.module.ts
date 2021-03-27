import { NgModule } from '@angular/core';
import { CssFlexboxRoutingModule } from './css-flexbox-routing.module';
import { CssFlexboxPageComponent } from '../components/css-flexbox-page/css-flexbox-page.component';


@NgModule({
  declarations: [CssFlexboxPageComponent],
  imports: [CssFlexboxRoutingModule]
})

export class CssFlexboxModule {}
