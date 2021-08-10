import {bfast, BFast} from 'bfastjs';
import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {ProjectState} from '../states/project.state';


@Component({
    selector: 'app-projects-page',
    template: `<app-navbar></app-navbar>
<app-projects></app-projects>
<app-footer></app-footer>`,
    styleUrls: []
})
export class ProjectsPage implements OnInit, OnDestroy{
    constructor(public readonly projectState: ProjectState){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}

