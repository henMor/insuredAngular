import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ MyServerService } from '../../my-server.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})

export class RemoveComponent implements OnInit {
  username: String;
  password: String;

  constructor(private http: HttpClient, private server: MyServerService) { }

  ngOnInit() {
  }


  remove(){
    console.log(this.username);
    this.server.removeUser({username: this.username});
  }

}
