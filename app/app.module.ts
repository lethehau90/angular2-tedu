import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee.component';

import { EmployeeService } from './service/employee.service';
import { LoginService } from './service/login.service';
import { CheckLoginGuards } from './guards/check-login.guards';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';

import { EmployDetailComponent } from './employ-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';

import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-project.component';
import { LoginComponent } from './login.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    
    EmployDetailComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,

    EmployeeOverviewComponent,
    EmployeeProjectsComponent,
    LoginComponent
  ]
  ,
  bootstrap: [AppComponent],
  providers: [EmployeeService,LoginService,CheckLoginGuards,CheckSaveFormGuard]
})
export class AppModule { }
