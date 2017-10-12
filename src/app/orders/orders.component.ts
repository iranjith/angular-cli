import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rk-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
