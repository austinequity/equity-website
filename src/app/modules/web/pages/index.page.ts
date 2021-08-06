import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-index-page',
    template: `<nav>
    <label><a class="title" href="index.html">AUSTIN'S EQUITY</a></label>
    <ul class="topnav">
        <li><a class="othert" href="howitworks.html">How it works?</a></li>
        <li><a class="othert" href="about.html">ABOUT</a></li>
        <li><a class="othert" href="login.html">LOGIN</a></li>
        <li><a class="othert" href="register.html">REGISTER</a></li>
    </ul>
</nav>
<div class="banner"></div>
<div class="wrapper">

    <div class="itemgrid">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>

</div>

<footer>
    <div class="sector-footer-grid">
        <div class="company">
            <ol>
                <li><a href="#aboutus">About us</a></li>
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
    <article align="center">codenasi @2021</article>
</footer>`,
    styleUrls: ['../styles/web.style.scss']
})
export class IndexPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

