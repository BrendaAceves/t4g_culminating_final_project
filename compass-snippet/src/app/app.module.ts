import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
// import {MatFormField} from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Step1Component } from './onboarding/step1/step1.component';
import { Step2Component } from './onboarding/step2/step2.component';
import { Step3Component } from './onboarding/step3/step3.component';
import { Step4Component } from './onboarding/step4/step4.component';
import { Step5Component } from './onboarding/step5/step5.component';
import { Step6Component } from './onboarding/step6/step6.component';
import { Step7Component } from './onboarding/step7/step7.component';
import { GreetingComponent } from './home/greeting/greeting.component';
import { DatetimeComponent } from './home/datetime/datetime.component';
import { WeeklyGoalsComponent } from './home/weekly-goals/weekly-goals.component';
import { QuarterlyGoalsComponent } from './home/quarterly-goals/quarterly-goals.component';
import { LongTermGoalsComponent } from './home/long-term-goals/long-term-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OnboardingComponent,
    HomeComponent,
    NavbarComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    GreetingComponent,
    DatetimeComponent,
    WeeklyGoalsComponent,
    QuarterlyGoalsComponent,
    LongTermGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
