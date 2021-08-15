import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-deposit-body',
    template: `<div class="deposit-body">

    <div class="deposit-balance">
        <h1>Balance:</h1>
    </div>

    <div class="deposit-menu-tabs">
        <div>
    </div>
</div>`,
    styleUrls: ['../styles/deposition-page-body.style.scss']
})
export class DepositBodyComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

