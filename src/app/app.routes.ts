import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplaycontactsComponent } from './displaycontacts/displaycontacts.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { studentguardGuard } from './guards/studentguard.guard';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Behaviourchild1Component } from './behaviourchild1/behaviourchild1.component';
import { Behaviourchild2Component } from './behaviourchild2/behaviourchild2.component';
import { BehavioursubjectparentComponent } from './behavioursubjectparent/behavioursubjectparent.component';
import { PipeComponent } from './pipe/pipe.component';
import { EventparentComponent } from './eventparent/eventparent.component';

export const routes: Routes = [
    { path: '',component: LandingpageComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'pipe',component: PipeComponent },
    { path: 'event',component: EventparentComponent},
    {path: 'sub', component: BehavioursubjectparentComponent},
    { path: 'sub1', component: Behaviourchild1Component },
    {path: 'sub2', component: Behaviourchild2Component},
    {path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    {path: 'reactiveform', component: ReactiveformComponent},
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
