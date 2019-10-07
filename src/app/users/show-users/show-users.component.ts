import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ MyServerService } from '../../my-server.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  username: String;

  constructor(private http: HttpClient, private server: MyServerService) { }

  ngOnInit() {
  }

  showUsers(){
    console.log(this.username);
    this.server.showAllUsers().
    subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    });
  }
}
