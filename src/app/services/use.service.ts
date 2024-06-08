import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Child from '../child';
import User from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 user:User=new User(null,"","","",new Date(),null,null,null)
child:Child=new Child(0,"",new Date(),"")
children:Child[]=[];
currentUser=new User(null,"","","",new Date(),null,null,null)



  constructor(public http:HttpClient) { }
  getAllUsers():Observable<User[]>
  {
    console.log("server");
    return this.http.get<User[]>("https://localhost:7171/api/User");
}
  getUserById(id):Observable<User>
  {
    return this.http.get<User>(`https://localhost:7171/api/User${id}`)
  }
  addUser(user:User):Observable<User>
  {
    console.log(user)
    return this.http.post<User>("https://localhost:7171/api/User",user)
  }
}

