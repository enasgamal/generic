import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AllStudentsDetailsComponent } from './all-students-details/all-students-details.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';


const routes: Routes = [ 
  
  {path:'students-list',component:StudentsListComponent},
  {path:'students-list/details/:id',component:DetailsComponent},
  {path:'all-students-details',component:AllStudentsDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'',component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
