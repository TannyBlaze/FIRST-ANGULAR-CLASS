import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplaycontactsComponent } from './displaycontacts/displaycontacts.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { studentguardGuard } from './guards/studentguard.guard';

export const routes: Routes = [
    {path: '',component: LandingpageComponent},
    {path: 'home', redirectTo: '', pathMatch: 'full' },
    {path: 'signup', component: SignupComponent },
    {path: 'signin', component: SigninComponent},
    {path: 'dashboard', children: [
        {path: '',component: DisplaycontactsComponent},
        {path: 'deposit', component: LandingpageComponent },
        {path: ':i',component: DisplaycontactsComponent}
    ]
    },
    {path: 'Dashboard', children: [
        {path: '', component: DashboardComponent },
        {path:'settings', component:SettingsComponent}
    ],canActivate:[studentguardGuard  ]
    },
    {path:'display/:index',component:DisplaycontactsComponent},
    {path: '**', component: ErrorpageComponent}
];
