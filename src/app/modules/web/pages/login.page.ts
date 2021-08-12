import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-login-page',
    template: `<app-navbar></app-navbar>


  <br><br>
  <div class="login-card">
    <div class="log_head">
    
      <span class="material-icons lock" style="font-size: 60px; color: aliceblue  ;">
        login
      </span>
    </div>


    <div class="log_body">
      <form action="#" method="get" name="loginform" onsubmit="return(loginvalidate());">
        <table width="200" border="0" align="center">
          <tr>
            <td><input placeholder="Email" type="email" name="emailid" class="log_user"></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><input placeholder="Password" type="password" name="pass" class="log_Pass"></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><input name="remember" type="checkbox" value="Remember Me"> Keep me logged in</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><input type="submit" name="login" class="login-submit" value="SIGN IN"></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Don't have an account ? <a href="register.html" rel="register" style="color: darkgreen;">Sign Up</a>
            </td>
          </tr>
        </table>

      </form>
    </div>

  </div>

  <br><br><br>



  <app-footer></app-footer>`,
    styleUrls: ['../styles/loginxregistration.style.scss']
})
export class LoginPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

