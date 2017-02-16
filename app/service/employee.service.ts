import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl ="http://58a5341ea88fbc12003806a8.mockapi.io/api/employees";
    constructor(private _http: Http){
    }
    GetList(): Observable<any[]> {
        // let employees: any[] = [
        //     { ID: 1, Name: 'Hau' },
        //     { ID: 2, Name: 'Cong' },
        //     { ID: 3, Name: 'Hien' },
        //     { ID: 3, Name: 'Thang' }
        // ];
        // return employees;

       return this._http.get(this.apiUrl).map((response: Response) => response.json())
          
       }
}