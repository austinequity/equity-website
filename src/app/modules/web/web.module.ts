import {bfast} from 'bfastjs';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {ROUTES} from '@angular/router';

import {AuthGuard} from './guards/auth.guard';

import {IndexPage} from './pages/index.page';
import {LoginPage} from './pages/login.page';


const routes: Routes = [
   { path: 'login', canActivate: [  ], component: LoginPage },
   { path: '', canActivate: [ AuthGuard ], component: IndexPage },
];

@NgModule({
  declarations: [
     IndexPage,
     LoginPage,
  ],
  imports: [
    CommonModule,
    {
      ngModule: RouterModule,
      providers: [
        {
          multi: true,
          provide: ROUTES,
          useValue: routes
        }
      ]
    },
    
  ],
  exports: [
    
  ],
})
export class WebModule {
    constructor(){
        
    }// end
}

