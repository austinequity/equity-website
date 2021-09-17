import {bfast} from 'bfastjs';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {ROUTES} from '@angular/router';


import {BannerComponent} from './components/banner.component';
import {CategoriesComponent} from './components/categories.component';
import {CategoryItemComponent} from './components/category-item.component';
import {DepositBodyComponent} from './components/deposit-body.component';
import {FooterComponent} from './components/footer.component';
import {LoginComponent} from './components/login.component';
import {MydashboardComponent} from './components/mydashboard.component';
import {NavbarComponent} from './components/navbar.component';
import {ProjectsComponent} from './components/projects.component';
import {ProjectspecificBodyComponent} from './components/projectspecific-body.component';
import {RegistrationComponent} from './components/registration.component';
import {SettingComponent} from './components/setting.component';
import {AboutPage} from './pages/about.page';
import {DepositionPagePage} from './pages/deposition-page.page';
import {HowitworksPage} from './pages/howitworks.page';
import {IndexPage} from './pages/index.page';
import {LoginPage} from './pages/login.page';
import {MyDashboardPage} from './pages/myDashboard.page';
import {ProjectsPage} from './pages/projects.page';
import {ProjectspecificPage} from './pages/projectspecific.page';
import {RegistrationPage} from './pages/registration.page';
import {SettingsPage} from './pages/settings.page';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
   { path: 'home', canActivate: [  ], component: IndexPage },
   { path: 'login', canActivate: [  ], component: LoginPage },
   { path: 'about', canActivate: [  ], component: AboutPage },
   { path: 'howitworks', canActivate: [  ], component: HowitworksPage },
   { path: 'projects/:category', canActivate: [  ], component: ProjectsPage },
   { path: 'register', canActivate: [  ], component: RegistrationPage },
   { path: 'projectspecific', canActivate: [  ], component: ProjectspecificPage },
   { path: 'deposit', canActivate: [  ], component: DepositionPagePage },
   { path: 'index', canActivate: [  ], component: IndexPage },
   { path: 'myDashboard', canActivate: [  ], component: MyDashboardPage },
   { path: '', canActivate: [  ], component: IndexPage },
   { path: 'settings', canActivate: [  ], component: SettingsPage },
];

@NgModule({
  declarations: [
     AboutPage,
     DepositionPagePage,
     HowitworksPage,
     IndexPage,
     LoginPage,
     MyDashboardPage,
     ProjectsPage,
     ProjectspecificPage,
     RegistrationPage,
     SettingsPage,
     BannerComponent,
     CategoriesComponent,
     CategoryItemComponent,
     DepositBodyComponent,
     FooterComponent,
     LoginComponent,
     MydashboardComponent,
     NavbarComponent,
     ProjectsComponent,
     ProjectspecificBodyComponent,
     RegistrationComponent,
     SettingComponent,
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
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    
  ],
})
export class WebModule {
    constructor(){
        
    }// end
}

