import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing.module';
import { BooksPageComponent } from '../components/books-page/books-page.component';


@NgModule({
  declarations: [BooksPageComponent],
  imports: [BooksRoutingModule]
})

export class BooksModule {}
