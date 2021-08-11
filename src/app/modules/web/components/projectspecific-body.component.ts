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

