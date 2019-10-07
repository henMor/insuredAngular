import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './users/login/login.component';
import { RemoveComponent } from './users/remove/remove.component';
import { ShowUsersComponent } from './users/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    RemoveComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
