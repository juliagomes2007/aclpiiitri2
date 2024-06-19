import { Injectable } from "@angular/core";

export class Fruta{
  nome: string;
  temperaturaMin: number;
  temperaturaMax: number;

  constructor(nome: string, temperaturaMin: number, temperaturaMax: number) {
    this.nome = nome;
    this.temperaturaMin = temperaturaMin;
    this.temperaturaMax = temperaturaMax;
  }
}
