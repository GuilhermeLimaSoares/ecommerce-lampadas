import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FUllUser, User } from 'src/models/user.model';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './icon-buttons.component.html',
  styleUrls: ['./icon-buttons.component.css']
})
export class IconButtonsComponent implements OnInit {
  public authentication: FUllUser;
  public isOpenLogin = false;
  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    console.log('controle 1');
    console.log(this.authentication);
    this.getUser();
  }

  public open(value: boolean){
    return value = !value;
  }

  public getUser(){

    this.userService.availableUser.subscribe((res) => {
      console.log('usuario atual');
      this.authentication = res;
    });
  }
}
