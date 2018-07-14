import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/internal/Observable";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-examen2',
  templateUrl: './examen2.component.html',
  styleUrls: ['./examen2.component.css']
})
export class Examen2Component implements OnInit {


  myControl = new FormControl();
  options: string[] = ['Pablo Neruda', 'Juan Montalvo', 'J.K Rowling'];
  filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
