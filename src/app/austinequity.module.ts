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
    applicationId: '06c83f5d-97fb-43ec-939c-8cd8cab38ef8',
    projectId: '7aa01166-590d-4881-b13f-c23a71e90fbe',
});
    }// end
}

