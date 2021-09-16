import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-setting',
    template: `<div class="body">  
   <div class="settingBody">
        <div class="settingSidebar">
          <div class="SettingHeader">
              <h1>Settings</h1>
          </div>
          <mat-list>
                <mat-list-item class="item"><a routerLink='cars'>General</a></mat-list-item>
                <mat-divider class="dividingTool"></mat-divider>
                <mat-list-item class="item">Security</mat-list-item>
                <mat-divider class="dividingTool"></mat-divider>
                <mat-list-item class="item">Billing info</mat-list-item>
                <mat-divider class="dividingTool"></mat-divider>
                <mat-list-item class="item">KYC's</mat-list-item>
                <mat-divider class="dividingTool"></mat-divider>
           </mat-list>
    </div>
     <div class="settingContent">
         <div class="generalSlide">
             <!-- <form>
             </form> -->
         </div>
           
        </div>
</div>    `,
    styleUrls: ['../styles/setting.style.scss']
})
export class SettingComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

