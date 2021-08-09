import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-footer',
    template: `<footer>
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
export class FooterComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

