import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }
  userCredential: any={
    admin:{password: '1234', role: ['STUDENT', 'ADMIN']},
    user1:{password: '1234', role: ['STUDENT']}
  }

  username: any;
  isAuthenticated: boolean=false;
  role: string[]=[];

  loginService(myUsername: string, myPassword: string): boolean{

    if(this.userCredential[myUsername] && this.userCredential[myUsername]['password']==myPassword){
        this.username=myUsername;
        this.isAuthenticated=true;
        this.role= this.userCredential[myUsername]['role'];
        return true
    }else {
        return false
    }
  }

  logoutService() {
    this.isAuthenticated=false;
    this.role=[];
    this.username=undefined;
    this.router.navigateByUrl("/login")
  }
}
