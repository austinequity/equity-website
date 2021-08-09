import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-about-page',
    template: `<app-navbar></app-navbar>
<img src="assets/imgsvd/digital.jpeg" alt="" class="sector-specific">

<div class="about-grid wrapper" style="line-height:2em;">
  <div class="aboutsideA">
    <h1 style="font-weight: bold;">ABOUT</h1>
    Welcome to AUSTIN EQUITY COMPANY LIMITED, your number one source for crowdfunding investments. We're dedicated to
    giving you the very best of investment opportunities offering at most returns to your portfolio, with a focus on
    using AI powered portfolio manager, investing on low risk highreturn investment and state of the earth software to
    assure u a smooth, reliable and secure digital investments platform.<br><br>


Founded in 2021 by Austin Sanga, AUSTIN EQUITY COMPANY LIMITED has come a long way from its beginnings in University of Dar es salaam(CoICT). When Austin Sanga first started out, his passion for having a digital investment platform to assure youth diverse investments to sectors thay have hard time to monitor like agriculture and real estate drove them to action in his first year practical training session, so that AUSTIN EQUITY COMPANY LIMITED can offer you an easy way to invest digitally without the worry of fraud. We now serve customers all over Tanzania, and are thrilled that we're able to turn our passion into world wide coverage.<br><br>



         </div>
  <div class="aboutsideA">
    <br><br>I hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.<br><br>


        Sincerely,<br>

        Austin sanga<br>
        Founder and CEO</div>

</div>

<app-footer></app-footer>`,
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

