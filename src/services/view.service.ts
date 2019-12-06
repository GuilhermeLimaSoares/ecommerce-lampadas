import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { FUllUser, User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  // public availableUser = new EventEmitter();
  public view = new BehaviorSubject(undefined);
  constructor() { }

  public exposeProduct(data) {
    return of(this.view.next(data));
  }

}
