import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import User from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(){}
  empty=new User(null,null,null,null,null,null,null,null)
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'client';
}
