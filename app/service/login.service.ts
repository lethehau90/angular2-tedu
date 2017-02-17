import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {
    public _isLoggedin: boolean;
    IsLogged(): boolean {
        return this._isLoggedin;
    }
    setLogin(isloggedIn: boolean) {
        this._isLoggedin = isloggedIn;
    }
}