<<<<<<< HEAD
import { Component, OnInit, Input} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AuthService} from '../auth.service';
<<<<<<< HEAD
import { MatDialog } from '@angular/material/dialog';
=======
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
<<<<<<< HEAD
  credentials = true;
  isLoading= false;
  response=null;
  hide = true;
  self = null;
  n = 1;
   //We manually create a loginData object that holds login credentials


  constructor(public authService: AuthService) { }
=======
  isLoading= false;
  response=null;
  hide = true;
  self=null;
   //We manually create a loginData object that holds login credentials


   constructor(public authService: AuthService) {}
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071

   onLogin(form: NgForm) {
       if(form.invalid){
           return;
       }
<<<<<<< HEAD
     this.authService.login(form.value.username, form.value.password);
     this.credentials = this.authService.getCredentials()
     console.log(this.credentials);
   }

  

    
}
=======
       this.authService.login(form.value.username , form.value.password);
   }

    
}
>>>>>>> 21dee4023abecd20730a324fa01b6fa577d1f071
