import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  styleUrls: [`app/app.component.css`]
})
export class AppComponent {
   public title ="Le Hau";
   onSubmit(value: any){
      console.log(value);
   }

   public cities = [{Id: 1, Name: "HaNoi"},{Id:2 , Name: "HCM"}];

 }
