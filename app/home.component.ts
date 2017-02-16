import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'home-component',
    template: `<h1>this is home component</h1>
    <button (click)="GotoEmployee()">Goto Employee</button>
    
    `
})
export class HomeComponent {
    constructor(private router : Router){

    }
    GotoEmployee(){
        this.router.navigate(['employee']);
    }
}