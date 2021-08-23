import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {LoginState} from '../states/login.state';

import {FormBuilder} from '@angular/forms';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'app-login',
    template: `<br><br>
<div class="login-card">
  <div class="log_head">

    <span class="material-icons lock" style="font-size: 60px; color: aliceblue  ;">
        login
      </span>
  </div>


  <div class="log_body">
    <form  [formGroup]="loginForm" (ngSubmit)="login()">
      <table width="200" border="0" align="center">
        <tr>
          <td><input placeholder="Username" formControlName="username" class="log_user"></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><input placeholder="Password" type="password" formControlName="password" class="log_Pass"></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <!-- <tr>
          <td><input name="remember" type="checkbox" value="Remember Me"> Keep me logged in</td>
        </tr> -->
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><input type="submit" name="login" class="login-submit" value="{{loginState.loginProgress.value?'Please wait':'SIGN IN'}}"></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Don't have an account ? <a routerLink="/register" rel="register" style="color: darkgreen;">Sign Up</a>
          </td>
        </tr>
      </table>

    </form>
  </div>

</div>

<br><br><br>`,
    styleUrls: ['../styles/loginxregistration.style.scss']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

    loginForm: FormGroup = null;
    
    constructor(public readonly formBuilder: FormBuilder,
                public readonly loginState: LoginState){
    }
    
    async ngOnInit(): Promise<any> {
        this.loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
});
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }

    async login(): Promise<any> {
        console.log(this.loginForm.value);
const {username, password} = this.loginForm.value;
this.loginState.login(username, password);
    }
}

