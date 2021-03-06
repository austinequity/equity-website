import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-index-page',
    template: `<app-navbar></app-navbar>
<app-banner></app-banner>
<app-categories></app-categories>
<app-footer></app-footer>`,
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

