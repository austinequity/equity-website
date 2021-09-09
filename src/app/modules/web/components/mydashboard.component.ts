import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-mydashboard',
    template: `<div class="body">
    <div class="wrapper">
        <div class="investmentSummary">
            <!-- -balance ni total of physical cash available
            -hii ndo ambayo iko withdrawable
            -hii inaongezeka kama interest(inabidi product iwe na uwezo wa kuallocatiwa withdrawable interest) zimekua translated to withdrawable cash
            -also inaongezeka in sense ya deposit ikifanyika
            -Inapungua in incidence hela imetumika kuinvest
            -inapungua incase of withdraw -->
            <div class="balance-bookValue-totalEarning">
                <span class="upTab-balance-figure">Tzs 0</span>
                <span class="upTab-data">Balance</span>
            </div>
            <!-- -book Value hii inasoma hypothetical valuation
            -Kwenye product c kuna sehemu ya kuweka valuation so ile ndo inakuja hapa(lakini inkua inafanya math ili valuation ya hapa iwe reflective na shares za user)
            -math inayofanyawa ni shares za mteja over total shares time valuation
            -(keeping note valuation kila ikiongezwa inakeep time stmap, so ata kwa user itabadilika based on the stamp(meaning duration aliyopo)) -->
            <div class="balance-bookValue-totalEarning">
                <span class="upTab-blookValue-figure">Tzs 0</span>
                <span class="upTab-data">Book value</span>
            </div>
            <!-- -Hii total earning to which inadeduct bookvalue - investments value ya huyo user -->
            <div class="balance-bookValue-totalEarning">
                <span class="upTab-totalEarning-figure">Tzs 0</span>
                <span class="upTab-data">Total earnings</span>
            </div>
            </div>
            
            <!-- lower tab -->

            <!-- for now ilivokaa its if mtu hana initial investment yyte -->
            <!-- lakini mtu akifanya itabidi iingie table ya angular itakayo display summary investments -->
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

