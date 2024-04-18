import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feed_ui_app';

  isLoggedIn:boolean = false;

  

  is_verified_user:boolean=false
  constructor(private userService:UserService){}
  ngOnInit():void {
   
    this.userService.isLoggedIn.subscribe(data=> this.isLoggedIn = data)
  }
}
