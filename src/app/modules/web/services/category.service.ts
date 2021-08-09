import {bfast, BFast} from 'bfastjs';
import {Injectable} from '@angular/core';



@Injectable({
    providedIn: 'any'
})
export class CategoryService {
    constructor(){
    }
    
    
    async all(): Promise<any> {
        //your codes
return bfast.database().table('categories').getAll();
    }
}

