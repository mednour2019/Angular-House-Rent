import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { PersonneService } from 'src/app/services/personne.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User("","")
  constructor(public personneService:PersonneService,public router:Router) { }
  login(){
    this.personneService.login(this.user).subscribe((res:any)=>{
      localStorage.setItem("connected","true");
      localStorage.setItem("email",res.email);
      this.personneService.getType(res.email).subscribe((result:any)=>{
        localStorage.setItem("type",result);
      })
      this.router.navigate(['/dashboard']);
    })
  }
  ngOnInit(): void {
  }

}
