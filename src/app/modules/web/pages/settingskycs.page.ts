import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-settingskycs-page',
    template: `<app-navbar></app-navbar>
<app-settingskycs></app-settingskycs>
<app-footer></app-footer>`,
    styleUrls: []
})
export class SettingskycsPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

