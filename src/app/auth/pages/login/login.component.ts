import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private AuthService:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.AuthService.Login().subscribe(resp =>{
      console.log(resp);
      if(resp.id){
        this.router.navigate(['./heroes'])
      }
      
    })
  }
  
  logout(){
    this.AuthService.logout();
    this.router.navigate(['./heroes'])
  }
}
