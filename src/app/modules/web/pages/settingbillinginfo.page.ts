import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-settingbillinginfo-page',
    template: `<app-navbar></app-navbar>
<app-settingsbilling></app-settingsbilling>
<app-footer></app-footer>`,
    styleUrls: []
})
export class SettingbillinginfoPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

