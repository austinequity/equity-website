import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-projects',
    template: `<div class="container-project-body">
    <div class="container-fluid">
    <div class="project-image">
        <div class="funded-unfunded">
         
        </div>
    </div>
    <div class="container-title-budget">
            <div class="container-title">
                
            </div>

            <div class="container-budget">

            </div>
    </div>
    <div class="container-prog-perc">
        <div class="container-progress-bar">

        </div>

        <div class="percentage-details">

        </div>
    </div>
        <div class="view-project">
            
        </div>
</div>



<div class="container-fluid">
    <div class="project-image">
        <div class="funded-unfunded">
         
        </div>
    </div>
    <div class="container-title-budget">
            <div class="container-title">
                
            </div>

            <div class="container-budget">

            </div>
    </div>
    <div class="container-prog-perc">
        <div class="container-progress-bar">

        </div>

        <div class="percentage-details">

        </div>
    </div>
        <div class="view-project">
            
        </div>
</div>


<div class="container-fluid">
    <div class="project-image">
        <div class="funded-unfunded">
         
        </div>
    </div>
    <div class="container-title-budget">
            <div class="container-title">
                
            </div>

            <div class="container-budget">

            </div>
    </div>
    <div class="container-prog-perc">
        <div class="container-progress-bar">

        </div>

        <div class="percentage-details">

        </div>
    </div>
        <div class="view-project">
            
        </div>
</div>
</div>`,
    styleUrls: ['../styles/project-container-fluid.style.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

