import { Component, OnInit } from "@angular/core";
import { Passdata } from "../../../services/passdata.service";
import { EmployeeModel } from "../../../models/employee.model";
@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
  employeeGroup: any;

  constructor(private passData: Passdata) {}

  ngOnInit() {
      this.passData.transfer.subscribe(value => {
        if(value['eventName'] === 'data:fetched') {
          this.employeeGroup = value['data'];
        }
      })

      this.passData.transfer.next({
        eventName : 'data:fetch'
      });
            
  }
  ngOnDestroy(){
    //this.passData.transfer.unsubscribe('');
  }
}
