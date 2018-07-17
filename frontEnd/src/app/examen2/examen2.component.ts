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


  ngOnInit() {

  }

  imprimirLetra(){
    console.log("hola")
  }

}
