import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-myDashboard-page',
    template: `<app-navbar></app-navbar>
<app-mydashboard></app-mydashboard>
<app-footer></app-footer>`,
    styleUrls: []
})
export class MyDashboardPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

