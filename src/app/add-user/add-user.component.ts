import { DatePipe } from '@angular/common';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@material-ui/core';
import { empty } from 'rxjs';
import Child from '../child';
import { ChildServiceService } from '../services/child.service';
import { UserServiceService } from '../services/use.service';
import {FormControl, Validators} from '@angular/forms';
import * as XLSX from 'xlsx';
import User from '../user';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(public service:UserServiceService,public childService:ChildServiceService, public routing:Router) {}

data=[]
isAddingChild=false;
today=new Date().toLocaleDateString
  addChild(){
   console.log("addChild")
   this.isAddingChild=true;
   console.log(this.isAddingChild)
  }
  getAllUser(){
   this.service.getAllUsers().subscribe(succ=>{console.log(succ)},err=>{console.log("error")})
  }
  saveUser(form){
   console.log(this.service.user.name)
   console.log(this.service.children)
   this.service.user.gender=(Number)(this.service.user.gender)
   this.service.user.hmo=(Number)(this.service.user.hmo)

   
    //  this.service.addUser(this.service.user).subscribe(succ=>{this.isAddedSuccesfully=true},err=>{console.log(err);console.log("error from adding user")})
    this.service.addUser(new User(0,this.service.user.name,this.service.user.familyName,this.service.user.tz,this.service.user.dob,this.service.user.gender,this.service.user.hmo,this.service.children)).subscribe(succ=>{succ},err=>{console.log(err);console.log("error from adding user")})
    this.data.push(this.service.user)
    this.data.push(this.service.children)
  this.service.currentUser=this.service.user
  localStorage.setItem("wasSaved",JSON.stringify(true))
  this.exportexcel(this.data,this.service.user.name)
  this.service.user=new User(null,"","","",new Date(),null,null,null)
  form.reset()
  this.routing.navigate([""])

  }
  exportexcel(json:any[],fileName:string): void 
  {
     const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(json);
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
     XLSX.writeFile(wb,fileName+'.xlsx');
  }
  saveChild(form){
    console.log("saveChild")
      console.log(this.service.child)
      this.service.children.push(this.service.child)
      this.service.child=new Child(0,"",new Date(),"")
      console.log(this.service.children)
    
    form.reset()
   }
   guidlines(){
    this.routing.navigate(["guidlines"])

   }
   
  ngOnInit(): void {
 
  }

}
