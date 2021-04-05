import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse } from './../models/response';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  student_id:number=0;
  firstName:string;
  lastName:string;
  email:string;
  imageUrl:string;
   constructor(private _activatedRoute:ActivatedRoute,private _userServices:UserService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.student_id=+params.get('id')
      console.log(this.student_id);
      this._userServices.getStudentDetails(this.student_id).subscribe(res=>{
        console.log((res as APIResponse).data)
        this.firstName=((res as APIResponse).data).first_name
        this.lastName=((res as APIResponse).data).last_name
        this.email=((res as APIResponse).data).email
        this.imageUrl=((res as APIResponse).data).avatar
        
      })
  })
   }

}


