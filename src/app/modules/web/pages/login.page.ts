import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Component({
    selector: 'app-login-page',
    template: `<app-navbar></app-navbar>


  <app-login></app-login>


  <app-footer></app-footer>`,
    styleUrls: ['../styles/loginxregistration.style.scss']
})
export class LoginPage implements OnInit, OnDestroy{
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

