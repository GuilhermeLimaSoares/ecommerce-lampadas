import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { FUllUser, User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // public availableUser = new EventEmitter();
  public availableUser = new BehaviorSubject(undefined);
  public userOut: FUllUser;
  constructor() { }

  // public exposeUser(data: FUllUser) {
  //   return of(this.availableUser.emit(data));
  // }

  public exposeUser(data: FUllUser) {
    return of(this.availableUser.next(data));
  }


  public logOut() {
    return of(Object.keys(this.userOut)
    .map((res) => {
      this.userOut[res] = '';
      // this.availableUser.emit(this.userOut);
      this.availableUser.next(this.userOut);
    }));
  }

}
