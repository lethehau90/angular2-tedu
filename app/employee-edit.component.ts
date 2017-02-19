import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from './service/employee.service';

@Component({
    selector: 'employee-edit-component',
    templateUrl: './app/employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit, OnDestroy {
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
        });
       

    }
    SaveForm(){
        this.employeeService.Update(this._id,this.employee).subscribe(response=>{
            if(response)
            {
                alert("Success");
                this.router.navigate(['/employees']);
            }
        })
    }

    GotoEmplay() {
        this.router.navigate(['employee']);
    }

     ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}