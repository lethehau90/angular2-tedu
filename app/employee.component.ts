import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html'

})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public keyword : string;
    public pages: number[];
    public currentPage: number;
    constructor(private employeeservice: EmployeeService, private router: Router, private activateroute: ActivatedRoute) {
    }
    ngOnInit() {
        this.activateroute.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        });

        this.loadData();
        this.pages = [1, 2, 3, 4, 5];
    }

    Search(){
         //this.employees = this.employeeservice.GetList();
        this.employeeservice.Search(this.keyword).subscribe((response: any) => {
            this.employees = response;
            //console.log(response);
        }, error => {
            console.log(error);
        });
    }
    Delete(id: number) {
        let confirmResult = confirm("Are you sure to delete employee?")
        if (confirmResult) {
            this.employeeservice.Delete(id).subscribe(response => {
                if (response) {
                    alert("Delete ok");
                    this.loadData();
                }
            })
        }
    }
    loadData(){
        //this.employees = this.employeeservice.GetList();
        this.employeeservice.GetList().subscribe((response: any) => {
            this.employees = response;
            //console.log(response);
        }, error => {
            console.log(error);
        });
    }
}