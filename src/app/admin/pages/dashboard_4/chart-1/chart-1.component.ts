import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faRegistered,
  faCalculator
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chart-1',
  templateUrl: './chart-1.component.html',
  styleUrls: ['./chart-1.component.scss']
})
export class Chart1Component implements OnInit {
  faCar = faCar;
  faRegistered = faRegistered;
  faCalculator = faCalculator;

  constructor() { }

  ngOnInit(): void {
  }
}
