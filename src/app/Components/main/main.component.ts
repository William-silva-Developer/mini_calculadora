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
//resetar: boolean = false;

  constructor() { }

  somar(): number{
    this.results = this.valor1 + this.valor2;
    return this.results;

  }

   subtrair(): number{
    this.results = this.valor1 - this.valor2;
    return this.results;
   }

   reset(): void{
    this.valor1 = 0;
    this.valor2 = 0;
    this.results = 0;



   }

  ngOnInit(): void {
  }




}
