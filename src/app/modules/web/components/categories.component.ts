import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {CategoryState} from '../states/category.state';



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

    
    
    constructor(public readonly categoryState: CategoryState){
    }
    
    async ngOnInit(): Promise<any> {
        //your codes
this.categoryState.all();
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        //your codes
this.categoryState.categories.next([]);
    }
}

