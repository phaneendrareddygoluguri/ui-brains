import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from 'src/app/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  isSubmitted:boolean=false
  roles:Roles[]=
  [
    {
      id:1,
      role:'Admin'
    },
    {
      id:2,
      role:'User'
    }
  ]
  constructor(
              private router_:Router,
              private fb_:FormBuilder
             ) 
  {
    this.loginForm=this.fb_.group(
      {
       username:['',[Validators.required]],
       password:['',[Validators.required]],
       role:['',[Validators.required]]
      }
    )
   }
    
   get formControls()
   {
     return this.loginForm.controls
   }
  ngOnInit(): void {
  }
  register()
  {
   this.router_.navigate(['/register'])
  }
  onSubmit()
  {
   console.log(this.loginForm.value);
   
  }
}
