import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

valor1: number = 0;
valor2: number = 0;
results!: number;
reset!: number;

  constructor() { }

  somar(): number{
    this.results = this.valor1 + this.valor2;
    return this.results;

  }

   subtrair(): number{
    this.results = this.valor1 - this.valor2;
    return this.results;
   }

   resetar(){
    this.valor1 = this.reset;
    this.valor2 = this.reset;
    this.results = this.reset;



   }

  ngOnInit(): void {
  }




}
