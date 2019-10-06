import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import{LoginComponent} from './users/login/login.component';
import{RemoveComponent} from './users/remove/remove.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'addUser', component: AddUserComponent},
  {path: 'loginUser', component: LoginComponent},
  {path: 'removeUser', component: RemoveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
