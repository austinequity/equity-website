import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-registration-page',
    template: `<app-navbar></app-navbar>

<app-registration></app-registration>

 <app-footer></app-footer>`,
    styleUrls: ['../styles/loginxregistration.style.scss']
})
export class RegistrationPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

