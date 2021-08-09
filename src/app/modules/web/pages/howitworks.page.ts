import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-howitworks-page',
    template: `<app-navbar></app-navbar>
    
    <div class="wrapper">
        
     <h1>How it works?</h1>
     <p style="font-size: 20px; font-family:sans-serif; color: #302f2f;">With <b>austin's equity</b> you are able to invest into different types<br> of projects and have overview of them in a very easy way.</p>

     <br><br>
    </div>
        <div class="imagehow">
                <h2 align="center" style="font-size:28px;">PROCEDURES</h2>
                <div class="howitworks"></div>
        </div>


    <div class="wrapper">
        <div class="main-itworks-columns">
      <div class="itworks-columns">
<div class="itworkcolumn">
    <h2>KYC</h2>
    <P class="iwc-p">After a simple registration you will need to identify yourself (KYC) due to requirements from a financial regulator.</P>
</div>
<div class="itworkcolumn">
    <h2>DEPOSITS</h2>
    <P class="iwc-p">To start investing you need to make a deposit. You can do this either via bank deposit, via credit card, Mobile network operators (Mpesa,Tigopesa,...). The deposited money is being held in a separate bank account until the project is funded and then are being released to the project.</P>
</div>
<div class="itworkcolumn">
    <h2>PROJECT FUNDING</h2>
    <P class="iwc-p">Once you have made deposit the fund is transfered to specific project invested in by you.</P>
</div>
<div class="itworkcolumn">
    <h2>INTEREST/YIELD</h2>
    <P class="iwc-p">As the time passes - you will receive payouts according to the project schedule.</P>
</div>
<div class="itworkcolumn">
    <h2>PRINCIPAL PAYOUT</h2>
    <P class="iwc-p">Once the project deadline is reached, the project will pay back the principal amount with the outstanding interests to your account in Austin's equity.</P>
</div>
      </div>


<div align="center" class="register-itwork" >
    <a href="register.html" class="register-itworks">start investing</a>
</div>

      </div>
     </div>

    




    <app-footer></app-footer>`,
    styleUrls: ['../styles/web.style.scss']
})
export class HowitworksPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

