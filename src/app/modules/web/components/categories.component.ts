import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {CategoryState} from '../states/category.state';
import {ProjectState} from '../states/project.state';



@Component({
    selector: 'app-categories',
    template: `<h1 class="bannerhome">Select sector to invest.</h1>
<div class="category-home-container">
    <div *ngFor="let c of categoryState.categories | async">
        <app-category-item [category]="c"></app-category-item>
    </div>
    <div *ngFor="let a of [1,2,3]">
        <div *ngIf=" categoryState.loading | async" class="category-item-skeleton">
            
        </div>
    </div>
</div>

<!-- old work is here above -->



<!-- The new look body begin here -->
<!-- 
<div class="featuredFeatures">

    <div *ngFor="let p of projectState.project | async" class="container-fluid">
        <div class="project-image">
            <div class="funded-unfunded">

            </div>
            <img style="height:300px; width: 100%; background: #f5f5f5" src="{{p.image}}">
        </div>

        <div class="container-title-budget">
            <div class="container-title">
                <h1 class="project-title">{{p.product}}</h1>
            </div>

            <div class="container-budget">
                 <h1 class="project-budget">Project budget: {{p.purchase | currency:'Tsh '}}</h1>
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

</div> -->

   <!-- testimonial -->
<div class="testomonial-coverup">
    <span class="testimonialHead">Testimonial</span>
    <div class="testimonial">
        <div class="embodied">
    <mat-card class="example-card">
            <mat-card-header>
                <div mat-card-avatar class="example-header-image"></div>
                <mat-card-content>
                <p>
                    <mat-card-title>Shiba Inu</mat-card-title>
                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                    bred for hunting.
                </p>
                </mat-card-content>
            
            </mat-card-header>
    </mat-card>
    </div>
    <div class="embodied">
    <mat-card class="example-card">
            <mat-card-header>
                <div mat-card-avatar class="example-header-image"></div>
                <mat-card-content>
                <p>
                    <mat-card-title>Shiba Inu</mat-card-title>
                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                    bred for hunting.
                </p>
                </mat-card-content>
            
            </mat-card-header>
    </mat-card>
    </div>
    <div class="embodied">
    <mat-card class="example-card">
            <mat-card-header>
                <div mat-card-avatar class="example-header-image"></div>
                <mat-card-content>
                <p>
                    <mat-card-title>Shiba Inu</mat-card-title>
                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                    bred for hunting.
                </p>
                </mat-card-content>
            
            </mat-card-header>
    </mat-card>
    </div>
    </div>
</div>`,
    styleUrls: ['../styles/category.style.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(public readonly categoryState: CategoryState,
                public readonly projectState: ProjectState){
    }
    
    async ngOnInit(): Promise<any> {
        //your codes
this.categoryState.all();
this.projectState.all();
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        //your codes
this.categoryState.categories.next([]);
    }
}

