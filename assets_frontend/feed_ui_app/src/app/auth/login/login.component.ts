import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login_data = {} as LoginModel
  loginForm: FormGroup

  constructor(private user_service: UserService, private formBuilder: FormBuilder, private matSnakebar: MatSnackBar, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  onSubmit() {
    this.login_data.email = this.loginForm.get('email')?.value;
    this.login_data.password = this.loginForm.get('password')?.value;

    this.user_service.login(this.login_data).subscribe({
      next: data => {
        localStorage.setItem("isLoggedIn", 'true');
        console.log(data);
        
        localStorage.setItem("uuid", data.uuid);

        localStorage.setItem("jwt", data.token);
        this.user_service.isLoggedIn.next(true);
        this.matSnakebar.open('Login Successfull', 'Close', {
          duration: 2000
        });
        this.router.navigate(['/home']);
      },
      error: error => {
        this.matSnakebar.open(error, 'Close', {
          duration: 2000
        });
      }
    })

  }

}
