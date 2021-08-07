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

    <div class="about-grid wrapper">
         <div class="aboutsideA"><h1 style="font-weight: bold;">ABOUT</h1>
         
         </div>
        <div class="aboutsideA"></div>

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

