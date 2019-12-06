import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from 'src/services/view.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
// @Input() detail;
public detail;
  constructor(private readonly viewService: ViewService) { }

  ngOnInit() {
    this.getView();
  }


  public getView(): void {
    this.viewService.view.subscribe((res) => {
      this.detail = res;
    });
  }

}
