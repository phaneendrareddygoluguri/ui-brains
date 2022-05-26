import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  constructor(
               private router_:Router
             )
   {
   }

  ngOnInit(): void {
  }
  signIn()
  { 
   this.router_.navigate(['/login']) 
  }
}
