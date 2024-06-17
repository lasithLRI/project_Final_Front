import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../modals/user.modal";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router) { }

  userLoggedIn:boolean = false;

  userList : Array<User> = [
    {
      email: "test@gmail.com",
      password: "123456",
      name: "test",
      confirmpassword: "123456"
    }
  ]

  isLoggedIn(): boolean {
    return this.userLoggedIn;
  }

  logout(): void {
    this.userLoggedIn = false;
    this.router.navigate(['/']);
  }

  userlogin(email: string, password: string) {
    const user = this.userList.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      this.userLoggedIn == true;

      this.router.navigate(['/register']).then(()=>console.log("Loggin Succesful"));
      return true;
    }
    return false;
  }

}
