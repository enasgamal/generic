import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup
  constructor(private _formBuilder:FormBuilder , private _userService:UserService, private _router:Router) {
    window.localStorage.setItem("Token", 'enas@gmail.com');
   }

  ngOnInit(): void {
    
    if(this._userService.isLogged())
    this._router.navigateByUrl("/students-list");
    this.form=this._formBuilder.group({
      Email:['',[Validators.required,Validators.email,Validators.maxLength(30)]],
      Password:['',[Validators.required]]
    })
  };
  
  login()
  {
    let token= window.localStorage.getItem("Token")
    if(token==this.form.controls['Email'].value)
    {
        this._userService.login(this.form.controls['Email'].value)
        this._router.navigateByUrl('/students-list')
    }
    else
    alert("please enter the correct email! .. Email: enas@gmail.com");
  }

}
