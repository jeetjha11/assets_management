import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-dialouge',
  templateUrl: './login-dialouge.component.html',
  styleUrls: ['./login-dialouge.component.css']
})
export class LoginDialougeComponent {
  constructor(private user_service: UserService, private fb:FormBuilder,private _snackBar: MatSnackBar,private router: Router) { 
   }

   loginForm=this.fb.group({
    email : ['',Validators.required],
    password : ['',Validators.required]
  })
  get projectName() { return this.loginForm.get("email")};
  get projectDescription() { return this.loginForm.get("password")};


  submit() {
  }
  
  

  

  
    

    

}
