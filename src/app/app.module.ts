import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/product/product.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    UserListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
