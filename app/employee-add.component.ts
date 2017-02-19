import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './service/employee.service';

@Component({
    selector: 'employee-add-component',
    templateUrl: './app/employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
    public _id: number;
    public employee: any;
    constructor(private router: Router, private activatedroute: ActivatedRoute,private employeeService: EmployeeService) {

    }
    ngOnInit() {
        
       this.employee = {};

    }
    SaveForm(){
        this.employeeService.Add(this.employee).subscribe(response=>{
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

  


}