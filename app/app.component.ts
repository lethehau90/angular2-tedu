import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service'
@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  styleUrls: [`app/app.component.css`]
})
export class AppComponent implements OnInit {
  public isLoggedin: boolean;
  constructor(private loginService: LoginService) {

  }

  Logout() {
    this.loginService.setLogin(false);
    alert('logout')
  }

  ngOnInit() {
    this.isLoggedin = this.loginService._isLoggedin;
  }

}
