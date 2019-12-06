import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { AuthenticationService } from 'src/services/authentication.service';
import { FUllUser } from 'src/models/user.model';
// import { ForkJoin} from 'rxjs';
// import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-final-buy',
  templateUrl: './final-buy.component.html',
  styleUrls: ['./final-buy.component.css']
})
export class FinalBuyComponent implements OnInit {
  public authentication;
  public isOpenLogin = false;
  public validation = {
    email: '',
    password: ''
  };
  public user = undefined;
  public products;
  public pay = []
  public totalPrice = 0;
  public valor;
  public price = new BehaviorSubject(undefined);
  public final = new BehaviorSubject(undefined);
  constructor(
    private readonly authenticationService: AuthenticationService,
    private shoppingService: ShoppingCartService,
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.getItens();
    // this.getUsers();
  }

  public getItens(){
    this.shoppingService.itens.subscribe((res) =>{
      console.log('products');
      console.log(res);
      this.products = res;
      this.pay = this.pay.concat(res);
      this.final.next(this.pay);
      this.calculate();
    });
  }

  public calculate(){

    this.pay.forEach((res) => {
      if (res !== undefined){
        this.totalPrice = this.totalPrice + parseFloat(res.price);
        this.price.next(this.totalPrice);
        this.price.subscribe((res) => {
          this.valor = res;
              });
      }
    });
  }

  // public getUser(){
  //   this.userService.availableUser
  //     .subscribe((res) => {
  //       console.log('usuario atual');
  //       console.log(res);
  //       this.user = res;
  //       const obj = {
  //         email: res.email,
  //         password: res.password,
  //       };

  //       const validator = Object.keys(obj)
  //       .every((res) => {
  //         return obj[res] ===  this.validation[res];
  //       });

  //       console.log(validator);

  //       if (validator === true){
  //         this.authentication = res;
  //         console.log('autenticação');
  //         console.log(this.authentication);
  //         // this.userService.exposeUser(this.authentication);
  //         this.userService.exposeUser(res);
  //       }
  //   }, (error) =>{
  //     console.log('erro de usuario');
  //   });
  // }


  public getValidation() {
    if (this.user === undefined) {
      this.isOpenLogin = true;
      this.validationInform();
     }
   }

  // public validationInform() {
  //   if (this.validation.email.length > 0) {
  //     this.getUser();
  //   }
  // }

  public validationInform() {
    if (this.validation.email.length > 0) {
      this.getUsers();
    }
  }

  public getUsers() {

    this.authenticationService
    .getUsers()
    .subscribe((res) => {
      this.user = res;
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

