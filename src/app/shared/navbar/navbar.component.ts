import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged:boolean=false;
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    // this.isLogged=this._userService.isLogged();
    this._userService.getLoggedStatus().subscribe(status=>{
      this.isLogged=status;
    });
  }

}
