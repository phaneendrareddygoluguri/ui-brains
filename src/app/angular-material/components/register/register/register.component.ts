import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gender, Roles } from 'src/app/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup
  genders:gender[]=
  [
    {
      id:0,
      gender:'male'
    },
    {
      id:1,
      gender:'female'
    },
    {
      id:2,
      gender:'prefer not to specify'
    }
  ]
  roles:Roles[]=
  [
    {
      id:0,
      role:'admin'
    },
    {
      id:1,
      role:'user'
    },
]
  constructor(
               private router_:Router
             )
   {
   }

  ngOnInit(): void {
  }
  onRegister()
  {
    
  }
  signIn()
  { 
   this.router_.navigate(['/login']) 
  }
}
