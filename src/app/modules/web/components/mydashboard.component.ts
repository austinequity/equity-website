import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-mydashboard',
    template: `<div class="body">
    <div class="wrapper">
        <div class="investmentSummary">
            <div class="balance-bookValue-totalEarning">
                <span class="upTab-balance-figure">Tzs 0</span>
                <span class="upTab-data">Balance</span>
            </div>
            <div class="balance-bookValue-totalEarning">
                <span class="upTab-blookValue-figure">Tzs 0</span>
                <span class="upTab-data">Book value</span>
            </div>
            <div class="balance-bookValue-totalEarning">
                <span class="upTab-totalEarning-figure">Tzs 0</span>
                <span class="upTab-data">Total earnings</span>
            </div>
            </div>
            
            <!-- lower tab -->
           <div class="myInvestment-noFund">
            <h1>My Investment</h1>
            <div class="no-fund-box">
                <img src="/assets/imgsvd/attach-money.png" >
                <div class="contentXbutton">
                <span class="no-fund-boxAlert">You have no investments yet, you can start now</span>
                <button class="start-investing"><a routerlink="/projects">Start investing</a></button>
                </div>
            </div>
            </div>    
   </div>
 </div>`,
    styleUrls: ['../styles/mydashboard.style.scss']
})
export class MydashboardComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

