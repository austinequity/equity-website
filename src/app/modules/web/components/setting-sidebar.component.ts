import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-setting-sidebar',
    template: `<div class="settingSidebar">
          <div class="SettingHeader">
              <h1>Settings</h1>
          </div>
          <mat-list>
                <mat-list-item class="item"><a routerLink='/settings'>General</a></mat-list-item>
                <mat-divider class="dividingTool"></mat-divider>
                <mat-list-item class="item"><a routerLink='/settingssecurity'>Security</a></mat-list-item>
                <mat-divider class="dividingTool"></mat-divider>
                <mat-list-item class="item"><a routerLink='/settingsbilling'>Billing info</a></mat-list-item>
                <mat-divider class="dividingTool"></mat-divider>
                <mat-list-item class="item"><a routerLink='/settingskycs'>KYC's</a></mat-list-item>
                <mat-divider class="dividingTool"></mat-divider>
           </mat-list>
    </div>`,
    styleUrls: ['../styles/setting-sidebar.style.scss']
})
export class SettingSidebarComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

