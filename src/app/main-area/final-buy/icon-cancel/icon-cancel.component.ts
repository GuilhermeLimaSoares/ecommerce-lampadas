import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-cancel',
  templateUrl: './icon-cancel.component.html',
  styleUrls: ['./icon-cancel.component.css']
})
export class IconCancelComponent implements OnInit {
  public color = false;
  public isCancel = true;
  constructor() { }

  ngOnInit() {
  }

  public changeColor(){
    this.color = !this.color;
  }

}
