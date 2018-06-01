import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from '../../../../models/employee.model';
@Component({
  selector: 'app-grid-tile',
  templateUrl: './grid-tile.component.html',
  styleUrls: ['./grid-tile.component.css']
})
export class GridTileComponent implements OnInit {

 @Input() employee:EmployeeModel;



  constructor() { }

  ngOnInit() {
  }

}
