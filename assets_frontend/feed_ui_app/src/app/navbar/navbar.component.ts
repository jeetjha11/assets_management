import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  siteName = 'News Feed App';
  isNavbarCollapsed = true;


  constructor(private user_service: UserService,private router:Router)
  {
    
  }

  toggleNavbarCollapse(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  logout() {
    console.log("hiiiiiii");
    
    // Implement logout logic here
    

  }

  Logout()
  {
    localStorage.clear()
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('jwt');
    localStorage.removeItem('uuid');
    this.user_service.isLoggedIn.next(false);
    this.user_service.authToken.next('');
    this.router.navigate(['/login']);

  }

}
