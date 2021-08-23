import {bfast, BFast} from 'bfastjs';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {UserService} from '../services/user.service';
import {InfoService} from '../services/info.service';


@Injectable({
    providedIn: 'any'
})
export class LoginState {
    constructor(private readonly userService: UserService,private readonly infoService: InfoService){
    }
    
    loginProgress: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    
    async login(username, password): Promise<any> {
        //your codes
this.loginProgress.next(true);
this.userService.login(username, password)
.then(value=>{
    this.userService.goToHome();
    this.infoService.show('Welcome');
})
.catch(reason=>{
    this.infoService.show(reason?.message);
})
.finally(()=>{
    this.loginProgress.next(false);
});
    }
}

