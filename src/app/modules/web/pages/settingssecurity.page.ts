import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-settingssecurity-page',
    template: `<app-navbar></app-navbar>
<app-settingssecurity></app-settingssecurity>
<app-footer></app-footer>`,
    styleUrls: []
})
export class SettingssecurityPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

