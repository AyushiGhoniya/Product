import { ShareModule } from './share/share.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShareModule,
    AppRoutingModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
