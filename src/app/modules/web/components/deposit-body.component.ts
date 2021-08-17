import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-deposit-body',
    template: `<div class="deposit-body">

    <div class="deposit-balance">
        <h1>Balance:</h1>
    </div>

    <div class="deposit-menu-tabs">
        <mat-tab-group>
            <mat-tab label="BANK TRANSFER">
            </mat-tab>
            <mat-tab label="MOBILE NETWORK">
                <div class="mobile-grid">
                    <div class="network-specific">
                        <img src="/assets/imgsvd/digital.jpeg" class="mobile-img">
                        <p>1. Piga *150*00#<br>
                           2. Chagua namba 4<br>
                           3. Changua namba 4<br>
                           4. Weka namba hii 000000 kama namba ya kampuni<br>
                           5. Weka namba hii 000000000000 kama namba ya kumbukumbu<br>
                           6. Weka kiasi 1,000<br>
                           7. Weka namba yako ya siri<br>
                           8. Jina la kampuni litatokea Austin Equity, kama kila kitu kipo sawa thibitisha kwa kujibu 1</p>
                    </div>    
                    <div class="network-specific">
                        <img src="/assets/imgsvd/airtel.jpeg" class="mobile-img">
                        <p>1. Piga *150*00#<br>
                           2. Chagua namba 4<br>
                           3. Changua namba 4<br>
                           4. Weka namba hii 000000 kama namba ya kampuni<br>
                           5. Weka namba hii 000000000000 kama namba ya kumbukumbu<br>
                           6. Weka kiasi 1,000<br>
                           7. Weka namba yako ya siri<br>
                           8. Jina la kampuni litatokea Austin Equity, kama kila kitu kipo sawa thibitisha kwa kujibu 1</p>
                    </div> 
                    <div class="network-specific">
                        <img src="/assets/imgsvd/tigo.png" class="mobile-img">
                        <p>1. Piga *150*00#<br>
                           2. Chagua namba 4<br>
                           3. Changua namba 4<br>
                           4. Weka namba hii 000000 kama namba ya kampuni<br>
                           5. Weka namba hii 000000000000 kama namba ya kumbukumbu<br>
                           6. Weka kiasi 1,000<br>
                           7. Weka namba yako ya siri<br>
                           8. Jina la kampuni litatokea Austin Equity, kama kila kitu kipo sawa thibitisha kwa kujibu 1</p>
                    </div> 
                    <div class="network-specific">
                        <img src="/assets/imgsvd/halopesa.png" class="mobile-img">
                        <p>1. Piga *150*00#<br>
                           2. Chagua namba 4<br>
                           3. Changua namba 4<br>
                           4. Weka namba hii 000000 kama namba ya kampuni<br>
                           5. Weka namba hii 000000000000 kama namba ya kumbukumbu<br>
                           6. Weka kiasi 1,000<br>
                           7. Weka namba yako ya siri<br>
                           8. Jina la kampuni litatokea Austin Equity, kama kila kitu kipo sawa thibitisha kwa kujibu 1</p>
                    </div> 
                </div>
            </mat-tab>
            <mat-tab label="VISA/MASTERCARD">
            </mat-tab>
        </mat-tab-group>
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

