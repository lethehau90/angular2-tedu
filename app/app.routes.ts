import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { NotFoundComponent } from './notfound.component';
import { EmployDetailComponent } from './employ-detail.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees-detail/:id', component: EmployDetailComponent},
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);