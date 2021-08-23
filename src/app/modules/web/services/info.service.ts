import {bfast, BFast} from 'bfastjs';
import {Injectable} from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'any'
})
export class InfoService {
    constructor(private readonly matSnackBar: MatSnackBar){
    }
    
    
    async show(message: string): Promise<any> {
        this.matSnackBar.open(message,'Ok',{duration:3000});
    }
}

