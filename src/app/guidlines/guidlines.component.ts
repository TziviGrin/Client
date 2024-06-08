import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/use.service';

@Component({
  selector: 'app-guidlines',
  templateUrl: './guidlines.component.html',
  styleUrls: ['./guidlines.component.scss']
})
export class GuidlinesComponent implements OnInit {
  // @Input()

  userName;
  userFName;
  user;
  constructor(public routing: Router, public ser: UserServiceService) { }
  addUser() {
    this.routing.navigate(["addUser"])

  }


  ngOnInit(): void {
   
      this.userName = this.ser.currentUser.name;
      this.userFName = this.ser.currentUser.familyName;
   
    console.log(this.userName)
  }

}
