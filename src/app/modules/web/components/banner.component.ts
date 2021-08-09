import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-banner',
    template: `<div class="banner">
    <div class="showcasebanner">
        <div>
            <p>
                Invest today to build<br>
                your future Tommorow.
            </p>
            <form>
                <input placeholder="Enter email here" type="email" name="emailid" class="showcaseemail"><input type="submit" name="login" class="getstarted" value="GET STARTED">
            </form>
        </div>
    </div>
</div>`,
    styleUrls: ['../styles/web.style.scss']
})
export class BannerComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

