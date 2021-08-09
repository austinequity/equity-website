import {bfast, BFast} from 'bfastjs';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {CategoryService} from '../services/category.service';


@Injectable({
    providedIn: 'any'
})
export class CategoryState {
    constructor(private readonly categoryService: CategoryService){
    }
    
    categories: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    loading: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    
    async all(): Promise<any> {
        //your codes
this.loading.next(true);
this.categoryService.all().then(value=>{
    this.categories.next(value);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    this.loading.next(false);
});
    }
}

