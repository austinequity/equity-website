import {bfast} from 'bfastjs';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
   { path: '', canActivate: [  ], loadChildren: () => import('./modules/web/web.module').then(mod => mod.WebModule) },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AustinequityModule {
    constructor(){
        //your codes
bfast.init({
    applicationId: 'austinequity',
    projectId: 'austinequity',
    databaseURL: 'http://austinequity.co.tz:8000',
    functionsURL: 'http://austinequity.co.tz:8000'
});
    }// end
}

