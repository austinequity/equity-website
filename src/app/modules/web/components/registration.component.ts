import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {RegisterState} from '../states/register.state';

import {FormBuilder} from '@angular/forms';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'app-registration',
    template: `<br><br>


    <div class="login-card">
        <div class="log_head">
        <h1>REGISTER</h1>
            <span class="material-icons lock" style="font-size: 60px; color: aliceblue  ;">
                app_registration
                </span>
        </div>


        <div class="log_body">
        <form   [formGroup]="registerForm" (ngSubmit)="register()">
         <table width="200" border="0" align="center">
          <tr>
            <td><input placeholder="First Name" type="text" formControlName="firstName" class="log_user" ></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><input placeholder="Last Name" type="text" formControlName="lastName" class="log_user" ></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><input placeholder="Email" type="text" formControlName="email" class="log_user" ></td>
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
          <tr>
            <td><input placeholder="Repeat Password" type="password" formControlName="repeatPassword" class="log_Pass"></td>
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
             <td><input type="submit" name="register" class="login-submit" value="{{registerState.registerProgress.value?'Please wait':'JOIN NOW'}}"></td>
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


    <br><br>`,
    styleUrls: ['../styles/loginxregistration.style.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy, AfterViewInit {

    registerForm: FormGroup = null;
    
    constructor(public readonly formBuilder: FormBuilder,
                public readonly registerState: RegisterState){
    }
    
    async ngOnInit(): Promise<any> {
        this.registerForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    password: [''],
    repeatPassword: [''],
});
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }

    async register(): Promise<any> {
        console.log(this.registerForm.value);
const {firstName, lastName, email, password, repeatPassword} = this.registerForm.value;
this.registerState.register(firstName, lastName, email, password, repeatPassword);
    }
}

