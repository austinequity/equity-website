import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-about-page',
    template: `<nav>
        <label><a class="title" href="index.html">AUSTIN'S EQUITY</a></label>
      <ul class="topnav"> 
       <li><a class="othert" href="howitworks.html">How it works?</a></li>
    <li><a class="othert" href="about.html">ABOUT</a></li>
    <li><a class="othert" href="login.html">LOGIN</a></li>
    <li><a class="othert" href="register.html">REGISTER</a></li>
    </ul>
    </nav>
    <img src="assets/imgsvd/digital.jpeg" alt="" class="sector-specific">

    <div class="about-grid wrapper" style="line-height:2em;">
         <div class="aboutsideA"><h1 style="font-weight: bold;">ABOUT</h1>
         Welcome to AUSTIN EQUITY COMPANY LIMITED, your number one source for crowdfunding investments.  We're dedicated to giving you the very best of investment opportunities offering at most returns to your portfolio, with a focus on using AI powered portfolio manager, investing on low risk highreturn investment and state of the earth software to assure u a smooth, reliable and secure digital investments platform.<br><br>


Founded in 2021 by Austin Sanga, AUSTIN EQUITY COMPANY LIMITED has come a long way from its beginnings in University of Dar es salaam(CoICT). When Austin Sanga first started out, his passion for having a digital investment platform to assure youth diverse investments to sectors thay have hard time to monitor like agriculture and real estate drove them to action in his first year practical training session, so that AUSTIN EQUITY COMPANY LIMITED can offer you an easy way to invest digitally without the worry of fraud. We now serve customers all over Tanzania, and are thrilled that we're able to turn our passion into world wide coverage.<br><br>



         </div>
        <div class="aboutsideA"> <br><br>I hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.<br><br>


        Sincerely,<br>
        
        Austin sanga<br>
        Founder and CEO</div>

    </div>

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
export class AboutPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

