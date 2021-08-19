import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-projects',
    template: `<div class="category-header">
    <h2 class="concerned-category">Agricultural Investments</h2>
</div>


<div class="container-project-body">



    <div class="container-fluid">
        <div class="project-image">
            <div class="funded-unfunded">
            </div>
        </div>

        <div class="container-title-budget">
            <div class="container-title">
                <h1 class="project-title">Mafinga Eucalyptus plantation.</h1>
            </div>

            <div class="container-budget">
                 <h1 class="project-budget">Project budget:</h1>
            </div>
        </div>

        <div class="container-prog-perc">
            <div class="container-progress-bar">
             <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
            </div>

            <div class="percentage-details">
                <p>funded:</p>
            </div>
        </div>

        <div class="view-project" >
         <label >View Project</label>
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

