import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-registration-page',
    template: `<app-navbar></app-navbar>


<br><br>


    <div class="login-card">
        <div class="log_head">
        <h1>REGISTER</h1>
            <span class="material-icons lock" style="font-size: 60px; color: aliceblue  ;">
                app_registration
                </span>
        </div>


        <div class="log_body">
        <form action="#" method="get" name="registrationform" onsubmit="return(registervalidate());">
         <table width="200" border="0" align="center">
          <tr>
            <td><input placeholder="First Name" type="text" name="firstname" class="log_user" ></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><input placeholder="Last Name" type="text" name="lastname" class="log_user" ></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><input placeholder="Email" type="text" name="emailid" class="log_user" ></td>
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
            <td><input placeholder="Repeat Password" type="password" name="repeatpass" class="log_Pass"></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><input name="acceptance" type="checkbox" value="accepted"> I agree with <a href="terms of service">Terms of service</a> and <a href="privacy policy" >Privacy policy</a></td>
            </tr>
            <tr>
            <td>&nbsp;</td>
            </tr>
            <tr>
             <td><input type="submit" name="register" class="login-submit" value="JOIN NOW"></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
             <td>Already have an account ?<a href="login.html" rel="login" style="color: darkgreen;">Sign Up</a></td>
            </tr>
          </table>

          </form>
          </div>

          </div>


    <br><br>



    <app-footer></app-footer>`,
    styleUrls: ['../styles/loginxregistration.style.scss']
})
export class RegistrationPage implements OnInit, OnDestroy{
    constructor(){
    }

    async ngOnInit(): Promise<any> {

    }

    async ngOnDestroy(): Promise<any> {

    }
}

