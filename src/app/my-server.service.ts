import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServerService {

  baseurl='http://localhost:5000/api/users/';
  constructor(private http: HttpClient) {
    console.log('server constarctor');
   }

   addUser(data){
    return this.http.post(this.baseurl + 'addClient', data)

   }

    loginUser(data){
      return this.http.post(this.baseurl + 'loginClient', data)

    }

   removeUser(){

   }

   updateUser(){

   }
}
