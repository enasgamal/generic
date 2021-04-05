import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { APIResponse } from '../models/response';
import { Student } from './../models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students:Student[]=[];
  student:Student=new Student()

  pageNumber:number=6;
  currentPg:number=1;

  constructor(private _userServices:UserService,private _activatedRoutes:ActivatedRoute) { }

  ngOnInit(): void {
  this._userServices.getStudentsList().subscribe(res=>{
    console.log((res as APIResponse).data)
  
    let foundStudents = (res as APIResponse).data
    for(let i=0;i<foundStudents.length;i++){
      console.log(foundStudents[i].first_name)
      this.students.push(foundStudents[i])
    }
    
  })
  }

}
