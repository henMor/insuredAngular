import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ MyServerService } from '../../my-server.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  username: String;
  lastName: String;
  password: String;
  email: String;
  constructor(private http: HttpClient, private server: MyServerService) {
  console.log(this.server);

   }

  ngOnInit() {
  }

  add(){
    console.log(this.username);
    this.server.addUser({username: this.username, lastName: this.lastName, 
      password: this.password, email: this.email }).
    subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    });
  }
}
