import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/intafaces/Auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get auth(){
    return this.AuthService.auth
  }
  constructor(private router:Router,private AuthService:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['./auth'])
    

  }
}
