import {bfast} from 'bfastjs';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {ROUTES} from '@angular/router';


import {WelcomeComponent} from './components/welcome.component';
import {AboutPage} from './pages/about.page';
import {MainPage} from './pages/main.page';


const routes: Routes = [
   { path: '', canActivate: [  ], component: MainPage },
   { path: 'about', canActivate: [  ], component: AboutPage },
];

@NgModule({
  declarations: [
     AboutPage,
     MainPage,
     WelcomeComponent,
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

