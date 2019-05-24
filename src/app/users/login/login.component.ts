import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ MyServerService } from '../../my-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private http: HttpClient, private server: MyServerService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.username);
    this.server.loginUser({username: this.username, 
      password: this.password}).
    subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    });
  }

}
