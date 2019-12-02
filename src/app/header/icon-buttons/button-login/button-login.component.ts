import { Component, OnInit } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { Observable } from'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../../services/authentication.service';
import { UserService } from '../../../../services/user.service';
import { FUllUser, User } from 'src/models/user.model';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css']
})
export class ButtonLoginComponent implements OnInit {

  public validation = {
    email: '',
    password: ''
  };
  authentication: FUllUser;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly userService: UserService
    ) { }

  ngOnInit() {

  }

  public validationInform() {
    if (this.validation.email.length > 0) {
      this.getUsers();
    }
  }

  public getUsers() {

    this.authenticationService
    .getUsers()
    .subscribe((res) => {
        res.map((result: FUllUser) => {
          const obj = {
            email: result.email,
            password: result.password,
          };

          const validator = Object.keys(obj)
          .every((res) => {
            return obj[res] ===  this.validation[res];
          });

          console.log(validator);

          if (validator === true){
            this.authentication = result;
            console.log('autenticação');
            console.log(this.authentication);
            // this.userService.exposeUser(this.authentication);
            this.userService.exposeUser(result);
          }

        });
    });
  }

}

const dictionaryUser = (data): User => ({
  email: data.email,
  password: data.password,
});
