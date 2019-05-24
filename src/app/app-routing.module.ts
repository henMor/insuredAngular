import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import{LoginComponent} from './users/login/login.component'


const routes: Routes = [
  {path: 'addUser', component: AddUserComponent},
  {path: 'loginUser', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
