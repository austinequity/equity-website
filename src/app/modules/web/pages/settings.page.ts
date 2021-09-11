import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-settings-page',
    template: `<app-navbar></app-navbar>
<app-setting></app-setting>
<app-footer></app-footer>`,
    styleUrls: []
})
export class SettingsPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

