import {bfast} from 'bfastjs';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {ROUTES} from '@angular/router';


import {BannerComponent} from './components/banner.component';
import {CategoriesComponent} from './components/categories.component';
import {CategoryItemComponent} from './components/category-item.component';
import {FeatureProductsComponent} from './components/feature-products.component';
import {FooterComponent} from './components/footer.component';
import {NavbarComponent} from './components/navbar.component';
import {ProjectsFilterComponent} from './components/projects-filter.component';
import {ProjectsComponent} from './components/projects.component';
import {AboutPage} from './pages/about.page';
import {HowitworksPage} from './pages/howitworks.page';
import {IndexPage} from './pages/index.page';
import {LoginPage} from './pages/login.page';
import {ProjectsPage} from './pages/projects.page';
import {RegistrationPage} from './pages/registration.page';


const routes: Routes = [
   { path: 'home', canActivate: [  ], component: IndexPage },
   { path: 'login', canActivate: [  ], component: LoginPage },
   { path: 'about', canActivate: [  ], component: AboutPage },
   { path: 'howitworks', canActivate: [  ], component: HowitworksPage },
   { path: '', canActivate: [  ], component: IndexPage },
   { path: 'projects/:category', canActivate: [  ], component: ProjectsPage },
   { path: 'register', canActivate: [  ], component: RegistrationPage },
];

@NgModule({
  declarations: [
     AboutPage,
     HowitworksPage,
     IndexPage,
     LoginPage,
     ProjectsPage,
     RegistrationPage,
     BannerComponent,
     CategoriesComponent,
     CategoryItemComponent,
     FeatureProductsComponent,
     FooterComponent,
     NavbarComponent,
     ProjectsFilterComponent,
     ProjectsComponent,
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

