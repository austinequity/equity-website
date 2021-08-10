import {bfast, BFast} from 'bfastjs';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {ProjectService} from '../services/project.service';


@Injectable({
    providedIn: 'any'
})
export class ProjectState {
    constructor(private readonly projectService: ProjectService){
    }
    
    project: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    loading: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    
    async all(): Promise<any> {
        //your codes
this.loading.next(true);
this.projectService.all().then(value=>{
    this.project.next(value);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    this.loading.next(false);
});
    }
}

