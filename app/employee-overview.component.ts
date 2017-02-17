import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'employee-overview-component',
    template: `<h3>This overview employee</h3>`
})
export class EmployeeOverviewComponent implements OnInit, OnDestroy {
    public parentRouterId: string;
    public subscription: Subscription;
    constructor(private router: Router, private activateroute: ActivatedRoute) {

    }
    ngOnInit() {
        this.subscription = this.activateroute.parent.params.subscribe(param=>{
            this.parentRouterId = param['id'];          
        })
    }

    ngOnDestroy() {

    }

}
