import {bfast, BFast} from 'bfastjs';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {InfoService} from '../services/info.service';
import {UserService} from '../services/user.service';


@Injectable({
    providedIn: 'any'
})
export class RegisterState {
    constructor(private readonly infoService: InfoService,private readonly userService: UserService){
    }
    
    registerProgress: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    
    async register(firstName,lastName,email,password,repeatPassword): Promise<any> {
        this.registerProgress.next(true);
if(password !== repeatPassword){
    this.infoService.show('Password does not match');  
    return;
}
this.userService.register({
    username: email,
    email: email,
    lastname: lastName,
    firstname: firstName,
    password: password
})
.then(value=>{
    this.userService.goToHome();
    this.infoService.show('successfully registered');
})
.catch(reason=>{
    this.infoService.show(reason?.message);
})
.finally(()=>{
    this.registerProgress.next(false);
});
    }
}

