import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Child from '../child';

@Injectable({
  providedIn: 'root'
})
export class ChildServiceService {

  constructor(public http:HttpClient) { }
  getAllChildren():Observable<Child>
  {
return this.http.get<Child>("https://localhost:7171/api/Child/Get")
  }
  getChildById(id):Observable<Child>
  {
    return this.http.get<Child>(`https://localhost:7171/api/Child/Get${id}`)
  }
  addChild(child:Child):Observable<Child>
  {
    return this.http.post<Child>("https://localhost:7171/api/Child/Post",child)
  }
}
