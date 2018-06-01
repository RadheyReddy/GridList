import { Component, OnInit } from '@angular/core';
import { Passdata } from '../../../services/passdata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employeeList: any;
  constructor(private passData:Passdata) { }

  ngOnInit() {
      this.passData.transfer.subscribe(value => {
        if(value['eventName'] === 'data:fetched') {
          this.employeeList = value['data'];
        }
      })

      this.passData.transfer.next({
        eventName : 'data:fetch'
      });
  }

}
