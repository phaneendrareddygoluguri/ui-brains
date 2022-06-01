import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tabs } from './headertabs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
tabs:any[]=tabs
  constructor
  (
        private router_:Router
  ) 
  { }

  ngOnInit(): void {
  }
}
