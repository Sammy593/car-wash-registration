import { Component, OnInit } from '@angular/core';

import {
  faDashboard,
  faLocation
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  faDashboard = faDashboard;
  faLocation = faLocation;

  constructor() { }

  ngOnInit(): void {
  }
}
