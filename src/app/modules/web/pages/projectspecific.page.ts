import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-projectspecific-page',
    template: `<app-navbar></app-navbar>

<app-projectspecific-body></app-projectspecific-body>
<app-footer></app-footer>`,
    styleUrls: []
})
export class ProjectspecificPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

