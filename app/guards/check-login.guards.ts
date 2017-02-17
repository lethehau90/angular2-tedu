import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';

@Injectable()
export class CheckLoginGuards implements CanActivate {
    constructor(private loginService: LoginService) { }
    canActivate() {
        //return this.loginService.IsLogged();
        let status = this.loginService.IsLogged();
        if (status == false)
            alert('you don\'t have permission acssec tho this page');
        return status;

    }
}