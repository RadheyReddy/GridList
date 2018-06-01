import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { JsonFetch } from "../../services/json-fetch.service";
import { Passdata } from "../../services/passdata.service";
import { EmployeeModel } from "../../models/employee.model";
@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  employeesData: EmployeeModel[];
  constructor(private jsonFetch: JsonFetch, private passData:Passdata,private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.passData.transfer.subscribe(value => {
      this.getDataHere((employeeData) => {
        if(value['eventName'] === 'data:fetch') {
          this.passData.transfer.next({
            eventName : 'data:fetched',
            data: employeeData
          });
      }
    });
    })
  }

  getDataHere(callback: Function): void {
    if(this.employeesData) {
      callback && callback(this.employeesData);
    } else {
      this.jsonFetch.getData().subscribe(
        response => {
          callback && callback(response.employees);
        },
        error => {
          console.log(error);
        },
        () => {
          //("Observable completed\n");
        }
      );
    }
    
  }
}
