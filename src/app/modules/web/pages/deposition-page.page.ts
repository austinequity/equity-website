import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-deposition-page-page',
    template: `<app-navbar></app-navbar>
<app-deposit-body></app-deposit-body>
<app-footer></app-footer>`,
    styleUrls: []
})
export class DepositionPagePage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

