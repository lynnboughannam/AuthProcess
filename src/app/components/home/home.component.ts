import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // user$ = this.authService.currentUser$;
  user$ = this.usersServices.currentUserProfile$;




  constructor(private authService: AuthenticationService,
    private usersServices: UsersService) {

  }
}
