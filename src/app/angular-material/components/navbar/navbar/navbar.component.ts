import { Component, OnInit } from '@angular/core';
import { tabs } from './headertabs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
tabs:any[]=tabs
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(tab:string)
  {

  }
}
