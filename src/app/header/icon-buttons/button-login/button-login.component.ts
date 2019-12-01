import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../../services/authentication.service';
import { FUllUser, User } from 'src/models/user.model';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css']
})
export class ButtonLoginComponent implements OnInit {

  // public validation = of({
  //   email: '',
  //   password: ''
  // });

  public validation = {
    email: '',
    password: ''
  };

  public authentication: FUllUser = {
        email: '',
        password: '',
        fullName: '',
        btBirth: '',
        gender: '',
        fullAddress: '',
        city: '',
        state: '',
        zipCode: '',
        photo: ''
  };


  constructor(
    private readonly authenticationService: AuthenticationService
    ) { }

  ngOnInit() {

    // this.authenticationService
    // .getUsers().subscribe((res) => {
    //     res.map((result) => {
    //       console.log(result);
    //     });
    // });

    // if (this.validation.email !== '') {
    //   console.log(of(this.validation.email));
    // }
    // console.log('email', of(this.validation.email));
    // const ouvinte = of(this.validation.email);

    // ouvinte.subscribe((res) => {
    //   console.log(res);
    // });

  }

  public validationInform() {
    if (this.validation.email.length > 0) {
      this.getUsers();
      // console.log(of(this.validation.email));
      // if (obj === this.validation) {
      //   console.log('valores iguais');
      // }
    }
  };

  public getUsers() {

    this.authenticationService
    .getUsers()
    .subscribe((res) => {
        res.map((result: FUllUser) => {
          const obj = {
            email: result.email,
            password: result.password,
          };
          // if (obj === this.validation) {
          //   console.log('valores iguais');
          // }
          // console.log(result);
          // Object.keys(obj[result] === this.validation.email) {
          //   console.log('valores iguais');
          // }

          // Object.keys(obj)
          // .map((res) =>{
          //   console.log(res);
          //   console.log('valores iguais');


          // });
          // const validator = [];
          // Object.keys(obj)
          // .every((res) => {
          //   validator.push(obj[res] === this.validation[res]);
          //   console.log(validator);
          //   // console.log(obj[res] == this.validation[res]);
          //   // return obj[res] ===  this.validation[res];
          //   // console.log(res);
          //   // console.log('valores iguais');

          //   // if (obj[res] === this.validation[res]) {
          //     // validator.push({res});
          //     // console.log(validator);
          //     // return validator.push(true);
          //   // }

          //   return validator.length === 2;
          // });

          const validator = Object.keys(obj)
          .every((res) => {
            return obj[res] ===  this.validation[res];
          });

          console.log(validator);

          if (validator === true){
            this.authentication = result;
            console.log('autenticação');
            console.log(this.authentication);
          }

          // switch (validator){
          //   case true:
          //     return this.authentication = result;
          //   case false:
          //     return console.log('error');
          // }
        });
    });
  }

}

const dictionaryUser = (data): User => ({
  email: data.email,
  password: data.password,
});
