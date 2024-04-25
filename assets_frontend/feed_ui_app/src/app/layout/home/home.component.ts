import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';
import { LoginDialougeComponent } from '../login-dialouge/login-dialouge.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  assets = [
    { id: 1, name: 'Asset 1', type: 'Type 1', description: 'This is asset 1' },
    { id: 2, name: 'Asset 2', type: 'Type 2', description: 'This is asset 2' },
    { id: 3, name: 'Asset 3', type: 'Type 3', description: 'This is asset 3' },
    { id: 4, name: 'Asset 4', type: 'Type 4', description: 'This is asset 4' },
    { id: 5, name: 'Asset 5', type: 'Type 5', description: 'This is asset 5' }
  ];

  reviews = [
    { id: 1, name: 'John Doe', date: '01/01/2022', comment: 'This is a great app!' },
    { id: 2, name: 'Jane Doe', date: '02/01/2022', comment: 'I love this app!' },
    { id: 3, name: 'Bob Smith', date: '03/01/2022', comment: 'This app is amazing!' }
  ];

  customerCount = 1000;



  count = 1;
  user_name: any
  isLoggedIn: boolean | undefined

  constructor(private asseet_service:AssetsService,private matsnakebar: MatSnackBar, private user_service: UserService, private router: Router, public dialogue: MatDialog) { }

  ngOnInit(): void {
    this.updateCount();
    this.user_service.isLoggedIn.subscribe(data => this.isLoggedIn = data);

    this.user_service.user_name.subscribe(data => this.user_name = data);
    this.get_tranding_assets();
    this.checkLogin();
  }


  updateCount(): void {
    setInterval(() => {
      if (this.count < 1000) {
        this.count++;
      } else {
        this.count = 1000;
      }
    }, 10);
  }



  onMouseEnter() {

    
    
    // Add your code here to handle the mouse enter event
  }

  onMouseLeave() {
    
    // Add your code here to handle the mouse leave event
  }



  cards:any

  get_tranding_assets() {
    this.asseet_service.getTrandingAssets().subscribe({
      next:(response)=>{
        this.cards=response
      },
      error:(error)=>{
        this.matsnakebar.open(
          'Error Occured',
          'Close',
          {
            duration: 2000
          }
        )
      }
    })
  }


  logout() {
    localStorage.clear();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('jwt');
    localStorage.removeItem('uuid');
    this.user_service.isLoggedIn.next(false);
    this.user_service.authToken.next('');
    this.user_service.user_name.next('');
    
    this.router.navigate(['/home']);
    
  }


  checkLogin() {
    if (!this.isLoggedIn) {
      setTimeout(() => {
        const dialog_refrence = this.dialogue.open(LoginDialougeComponent)

        dialog_refrence.afterClosed().subscribe(result => {  
          console.log("result",result);
          
          if (result) {
            this.user_service.login(result).subscribe({
              next: data => {
                localStorage.setItem("isLoggedIn", 'true');
                console.log(data);

                localStorage.setItem("uuid", data.uuid);

                localStorage.setItem("jwt", data.token);
                localStorage.setItem("user_name", data.user_name);
                this.user_service.isLoggedIn.next(true);
                this.matsnakebar.open('Login Successfull', 'Close', {
                  duration: 2000
                });
                this.router.navigate(['/home']);
              },
              error: err => {
                this.matsnakebar.open('Error Occured', 'Close', {
                  duration: 2000
                });
              }
            })
          }

        });


      }, 200);
    }
    else{
      this.router.navigate(['/home']);
    }
  }

  


}
