import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from '../../../../models/employee.model';

@Component({
  selector: 'app-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.css']
})
export class ListTileComponent implements OnInit {
  @Input() employee: EmployeeModel;
  constructor() { }

  ngOnInit() {
  }

}
