import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { GuidlinesComponent } from './guidlines/guidlines.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  
  {path:"guidlines",component:GuidlinesComponent},
  {path:"addUser",component:AddUserComponent},
  {path:"",component:NavbarComponent}
  // to add an err one


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
