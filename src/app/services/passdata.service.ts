import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Passdata {

transfer = new Subject();

  constructor() { 

  }
}
