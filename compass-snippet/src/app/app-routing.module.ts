import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { Step1Component } from './onboarding/step1/step1.component';
import { Step2Component } from './onboarding/step2/step2.component';
import { Step3Component } from './onboarding/step3/step3.component';
import { Step4Component } from './onboarding/step4/step4.component';
import { Step5Component } from './onboarding/step5/step5.component';
import { Step6Component } from './onboarding/step6/step6.component';
import { Step7Component } from './onboarding/step7/step7.component';
import { HomeComponent } from './home/home.component';


// Import other step components...

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'onboarding', component: OnboardingComponent, children: [
    { path: '', redirectTo: 'step1', pathMatch: 'full' },
    { path: 'step1', component: Step1Component },
    { path: 'step2', component: Step2Component },
    { path: 'step3', component: Step3Component },
    { path: 'step4', component: Step4Component },
    { path: 'step5', component: Step5Component },
    { path: 'step6', component: Step6Component },
    { path: 'step7', component: Step7Component },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
