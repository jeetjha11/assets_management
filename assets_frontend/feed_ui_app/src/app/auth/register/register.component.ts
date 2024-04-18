import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  user_registration = {} as User


  constructor(private formBuilder: FormBuilder, private matSnakebar: MatSnackBar, private router: Router, private user_service: UserService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone_number: ['', [Validators.required]]
    });





  }


  onSubmit() {

    this.user_registration.email = this.registerForm.get('email')?.value;
    this.user_registration.user_name = this.registerForm.get('user_name')?.value;
    this.user_registration.password = this.registerForm.get('password')?.value;
    this.user_registration.phone_number = this.registerForm.get('phone_number')?.value;

    this.user_service.register(this.user_registration).subscribe({
      next: data => {
        this.matSnakebar.open('Registered Successfully', 'Close', {
          duration: 2000
        });
        this.router.navigate(['/login']);
      },
      error: err => {
        this.matSnakebar.open('Error Occured', 'Close', {
          duration: 2000
        });
      }
    })

  }

}
