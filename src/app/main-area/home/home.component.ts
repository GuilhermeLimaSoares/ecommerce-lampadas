import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  ngOnInit() {

    this.userService.availableUser.subscribe((res) => {
      console.log('usuario atual');
      console.log(res);
    });
  }

}
