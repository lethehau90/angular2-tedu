import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html'

})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    public currentPage: number;
    constructor(private employeeservice: EmployeeService, private router: Router, private activateroute: ActivatedRoute) {
    }
    ngOnInit() {
        this.activateroute.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        })
        //this.employees = this.employeeservice.GetList();
        this.employeeservice.GetList().subscribe((response: any) => {
            this.employees = response;
            //console.log(response);
        }, error => {
            console.log(error);
        });

        this.pages = [1, 2, 3, 4, 5];
    }
}