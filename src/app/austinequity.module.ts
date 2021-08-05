import {bfast} from 'bfastjs';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';


const routes: Routes = [
   { path: '', canActivate: [  ], loadChildren: () => import('./modules/web/web.module').then(mod => mod.WebModule) },
   { path: 'a', canActivate: [  ], loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule) },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AustinequityModule {
    constructor(){
        
    }// end
}

