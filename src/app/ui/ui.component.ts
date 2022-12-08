import { Component, OnInit } from "@angular/core";
import { getValueOfR } from "../coeficientes/getValueOfR";
import { getValueOfRxy } from "../coeficientes/getValueOfRxy";
import { Y } from "../regresion-lineal/Y";
import { B0 } from "../regresion-lineal/b0";
import { b1 } from "../regresion-lineal/b1";
import { arreglo } from "../arreglonumeros/arreglo";
@Component({
  selector: "app-ui",
  templateUrl: "./ui.component.html",
  styleUrls: ["./ui.component.css"],
})
export class UiComponent implements OnInit {
  operator1!: number;
  operator2!: number;
  result!: number;
  constructor() {}

  numero1A: number = 0;
  numero2A: number = 0;
  numero3A: number = 0;
  numero4A: number = 0;
  numero5A: number = 0;
  numero6A: number = 0;
  numero7A: number = 0;
  numero8A: number = 0;
  numero9A: number = 0;
  numero10A: number = 0;
  numero1B: number = 0;
  numero2B: number = 0;
  numero3B: number = 0;
  numero4B: number = 0;
  numero5B: number = 0;
  numero6B: number = 0;
  numero7B: number = 0;
  numero8B: number = 0;
  numero9B: number = 0;
  numero10B: number = 0;
  Proxy: number = 0;
  resultnumber = 0;
  resultstring = " ";
  TextValueR!: number;
  TextValueRxy!: number;
  TextValueY!: number;
  TextValueB0!: number;
  TextValueB1!: string;

  ngOnInit(): void {}

  ValueOfR() {
    let myresult = 0;
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    let ArregloB: Array<number> = arreglo (this.numero1B, this.numero2B, this.numero3B, this.numero4B, this.numero5B, this.numero6B, this.numero7B, this.numero8B, this.numero9B, this.numero10B);
    myresult = getValueOfR (ArregloA, ArregloB);
    this.resultnumber = myresult;
    this.TextValueR = this.resultnumber;
  }

  ValueOfRxy() {
    let myresult = 0;
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    let ArregloB: Array<number> = arreglo (this.numero1B, this.numero2B, this.numero3B, this.numero4B, this.numero5B, this.numero6B, this.numero7B, this.numero8B, this.numero9B, this.numero10B);
    myresult = getValueOfRxy(ArregloA, ArregloB);
    this.resultnumber = myresult;
    this.TextValueRxy = this.resultnumber;
  }

  ValueOfY() {
    let myresult = 0;
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    let ArregloB: Array<number> = arreglo (this.numero1B, this.numero2B, this.numero3B, this.numero4B, this.numero5B, this.numero6B, this.numero7B, this.numero8B, this.numero9B, this.numero10B);

    myresult = Y(ArregloA,ArregloB, this.Proxy);
    this.resultnumber = myresult;
    this.TextValueY = this.resultnumber;
  }

  ValueOfB0() {
    let myresult = 0;
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    let ArregloB: Array<number> = arreglo (this.numero1B, this.numero2B, this.numero3B, this.numero4B, this.numero5B, this.numero6B, this.numero7B, this.numero8B, this.numero9B, this.numero10B);

    myresult = B0(ArregloA,ArregloB);
    this.resultnumber = myresult;
    this.TextValueB0 = this.resultnumber;
  }

  ValueOfB1() {
    let myresult = " ";
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    let ArregloB: Array<number> = arreglo (this.numero1B, this.numero2B, this.numero3B, this.numero4B, this.numero5B, this.numero6B, this.numero7B, this.numero8B, this.numero9B, this.numero10B);

    myresult = b1(ArregloA, ArregloB);
    this.resultstring = myresult;
    this.TextValueB1 = this.resultstring;
  }

}
