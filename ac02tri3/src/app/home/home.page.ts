import { Component } from '@angular/core';
import { Fruta } from './fruta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  morango = new Fruta('Morango', 15, 25);
  uva = new Fruta('Uva', 20, 30);
  laranja = new Fruta('Laranja', 15, 30);
  maracuja = new Fruta('Maracujá', 20, 32);
  kiwi = new Fruta('Kiwi', 14, 25);
  banana = new Fruta('Banana', 20, 29);
  lichia = new Fruta('Lichia', 28, 30);
  pitaya = new Fruta('Pitaya', 20, 30);
  goiaba = new Fruta('Goiaba', 25, 28);
  pessego = new Fruta('Pêssego', 1, 7);

  frutas: Fruta[] = [
    this.morango,
    this.uva,
    this.laranja,
    this.maracuja,
    this.kiwi,
    this.banana,
    this.lichia,
    this.pitaya,
    this.goiaba,
    this.pessego,
  ];
  frutasParaPlantar: Fruta[] = [];


  temp1: number = 0;
  temp2: number = 0;
  temp3: number = 0;
  temp4: number = 0;
  mediaTemp: number = 0;


  constructor(
    private router: Router,
  ) {}


  verifica(numero: number): number {
    return numero ? numero : 0;
  }
  // if(Number.isNaN(numero)){
  //   numero = 0;
  //   return numero;
  // } else {
  //   return numero;
  // }



  verificaFrutas(frutas: Array<Fruta>) {
    this.frutasParaPlantar = [];
    this.mediaTemp =
      (this.verifica(this.temp1) +
        this.verifica(this.temp2) +
        this.verifica(this.temp3) +
        this.verifica(this.temp4)) /
      4;
    frutas.forEach((fruta) => {
      if (
        this.mediaTemp >= fruta.temperaturaMin &&
        this.mediaTemp <= fruta.temperaturaMax
      ) {
        this.frutasParaPlantar.push(fruta);
      }
    });
  }

    mudaTela(){
      this.verificaFrutas(this.frutas);
      this.router.navigate(['/tela-frutas', { frutas: JSON.stringify(this.frutasParaPlantar), mediaTemp: this.mediaTemp }]);
    }
}
