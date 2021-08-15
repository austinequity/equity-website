import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-navbar',
   
    template: `<header class="header">
    <nav class="navbar">
        <label><a class="title" routerLink='/index'>AUSTIN EQUITY</a>
        </label>
            <ul class="topnav">
                <li class="nav-item" >
                    <a class="nav-link" routerLink='/projects/:category'>projects</a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link" routerLink='/howitworks'>How it works?</a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link" routerLink='/about'>ABOUT</a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link" routerLink='/login'>LOGIN</a>
                </li>
                <li class="nav-item" >
                    <a class="nav-link" routerLink='/register'>REGISTER</a>
                </li>
            </ul>
            <div class="humburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
    </nav>
</header>

<!-- <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo">WebDev.</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Services</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Blog</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header> -->`,
    styleUrls: ['../styles/navbar.style.scss']
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

