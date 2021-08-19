import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-projectspecific-body',
    template: `<!-- prjctspcfic-body-grid = projectspecific body-grid -->
<div class="prjctspcfic-body-grid">
    <div class="prjctspcfic-links">

    </div>
    <div class="secured-investment">
        
    </div>   

    <div class="prjctspcfic-body-paragraph">

    </div>    

    <div class="prjctspcfic-body-investing">
        <div class="funding-target">
            <h1>Funding target</h1>
            <h2 class="amount-target">1,000,000</h2>
        </div>
        <div class="progress-bar">
           <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
        </div>
    </div>     


</div>`,
    styleUrls: ['../styles/prjct-specific-body.style.scss']
})
export class ProjectspecificBodyComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

