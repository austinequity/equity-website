import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-category-item',
    template: `<div class="category-item" routerLink='/projects/{{category.id}}'>
    <div class="category-img">
        <img style="width:100%; heigth: 100%" [src]="category.image.concat('/thumbnail?w=400&h=517')">
    </div>
    <div class="category-detail">
        <div class="category-text-container">
            <p class="category-text">{{category.name}}</p>
        </div>
    </div>
</div>`,
    styleUrls: ['../styles/category.style.scss']
})
export class CategoryItemComponent implements OnInit, OnDestroy, AfterViewInit {

    @Input() category:any = null;
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        //your codes
// console.log(this.category);
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

