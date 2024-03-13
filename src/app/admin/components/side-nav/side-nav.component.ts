import { Component, OnInit } from '@angular/core';

import {
  faLocation
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  faLocation = faLocation;

  constructor() { }

  ngOnInit(): void {
  }
}
