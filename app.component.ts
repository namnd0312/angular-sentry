import {Component, OnInit} from '@angular/core';
import * as Sentry from "@sentry/angular";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-Angular';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    // Sentry.setTag("E500", "INTERNALSERVERERROR");

  }

  click(){
    // return this.http.get<any>("http://localhost:8080/api/test").subscribe(i =>{
    //   console.clear();
    //
    //   // console.log("response:  ", i);
    // });

    let student = {
      name: "namd",
      age: 12,

      address: "HN",
      id: 1,
      subject: {
        name: "namd",

        account: {
          name: "namd",
          accountInfo: {
            name: "asasas"
          }
        },
      },



    }
    this.http.post<any>('http://localhost:8080/api/saving', student).subscribe(data => {
      console.log("response data:  ", data);
    })
  }
}
