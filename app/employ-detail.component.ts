import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from './service/employee.service';

@Component({
    selector: 'employ-detail-component',
    templateUrl: './app/employ-detail.component.html'
})
export class EmployDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: any;
    public employee: any;
    constructor(private router: Router, private activatedroute: ActivatedRoute,private employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.subscription = this.activatedroute.params.subscribe(params => {
            this._id = params['id'];
        })

       //alert(this._id);
        this.employeeService.GetSingle(this._id).subscribe((data) => {           
            this.employee = data;
        })
    }

    GotoEmplay() {
        this.router.navigate(['employee']);
    }

     ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}