import {bfast, BFast} from 'bfastjs';
import {Injectable} from '@angular/core';

import {Router} from '@angular/router';


@Injectable({
    providedIn: 'any'
})
export class UserService {
    constructor(private readonly router: Router){
    }
    
    
    async login(username, password): Promise<any> {
        return bfast.auth().logIn(username, password);
    }

    async register(user: any): Promise<any> {
        return bfast.auth().signUp(user.username,user.password, user);
    }

    async goToHome(): Promise<any> {
        this.router.navigateByUrl('/').catch(console.log);
    }
}

