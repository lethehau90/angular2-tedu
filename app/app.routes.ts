import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { NotFoundComponent } from './notfound.component';

import { EmployDetailComponent } from './employ-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';

import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-project.component';
import { LoginComponent } from './login.component';
import { CheckLoginGuards } from './guards/check-login.guards'
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees-edit/:id', component: EmployeeEditComponent },
    { path: 'employees-add', component: EmployeeAddComponent },
    {
        path: 'employees-detail/:id', component: EmployDetailComponent, 
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectsComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);