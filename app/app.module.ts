import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './service/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { EmployDetailComponent } from './employ-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    EmployDetailComponent
  ]
  ,
  bootstrap: [AppComponent],
  providers: [EmployeeService]
})
export class AppModule { }
