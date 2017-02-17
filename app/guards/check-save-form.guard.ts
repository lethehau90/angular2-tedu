import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployDetailComponent } from '../employ-detail.component'
@Injectable()

export class CheckSaveFormGuard implements CanDeactivate<EmployDetailComponent>{

    canDeactivate(component: EmployDetailComponent) {
        alert('You can not leave this page without saving data');
        return false;
    }
}
