import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-navbar',
    template: `<nav>
    <label><a class="title" href="index.html">AUSTIN EQUITY</a></label>
    <ul class="topnav">
        <li><a class="othert" routerLink='/howitworks'>How it works?</a></li>
        <li><a class="othert" routerLink='/about'>ABOUT</a></li>
        <li><a class="othert" routerLink='/login'>LOGIN</a></li>
        <li><a class="othert" routerLink='/register'>REGISTER</a></li>
    </ul>
</nav>`,
    styleUrls: ['../styles/web.style.scss']
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

