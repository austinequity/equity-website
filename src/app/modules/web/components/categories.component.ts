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

