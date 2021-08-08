import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-login-page',
    template: `<nav>
    <label><a class="title" href="index.html">AUSTIN'S EQUITY</a></label>
    <ul class="topnav">
      <li><a class="othert" href="howitworks.html">How it works?</a></li>
      <li><a class="othert" href="about.html">ABOUT</a></li>
      <li><a class="othert" href="login.html">LOGIN</a></li>
      <li><a class="othert" href="register.html">REGISTER</a></li>
    </ul>
  </nav>


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



  <footer>
    <div class="sector-footer-grid">
      <div class="company">
        <ol>
          <li><a href="about.html">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Our pricing</a></li>
          <li><a href="#latest news">Latest news</a></li>
        </ol>

      </div>

      <div class="support">
        <ol>
          <li><a href="#FAQ'S">FAQ'S</a></li>
          <li><a href="#privacypolicy">Privacy policy</a></li>
          <li><a href="#terms&conditions">Terms & Conditions</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#contact us">Contact us</a></li>
        </ol>
      </div>

      <div class="address">
        <ol>
          <li>Location: Dar es salaam,Tanzania</li>
          <li>Email:info@patientcapital.com</li>
          <li>Phone:+255748288520</li>

        </ol>
      </div>
    </div>
    <article align="center">Patientcapital technologies @2021</article>
  </footer>`,
    styleUrls: ['../styles/web.style.scss']
})
export class LoginPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

