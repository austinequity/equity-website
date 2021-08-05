import {bfast} from 'bfastjs';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {ROUTES} from '@angular/router';


import {UserTableComponent} from './components/user-table.component';
import {UsersPage} from './pages/users.page';


const routes: Routes = [
   { path: '', canActivate: [  ], component: UsersPage },
];

@NgModule({
  declarations: [
     UsersPage,
     UserTableComponent,
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
export class AdminModule {
    constructor(){
        
    }// end
}

