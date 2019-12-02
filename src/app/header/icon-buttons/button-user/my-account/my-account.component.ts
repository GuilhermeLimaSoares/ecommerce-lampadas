import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public user;
  constructor(private readonly userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.userService.availableUser.subscribe((res) => {
      console.log('usuario atual');
      console.log(res);

      this.user = res;
    });
  }

}
