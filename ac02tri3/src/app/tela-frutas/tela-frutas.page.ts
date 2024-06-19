import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-frutas',
  templateUrl: './tela-frutas.page.html',
  styleUrls: ['./tela-frutas.page.scss'],
})
export class TelaFrutasPage implements OnInit {

  frutasParaPlantar: any[] = [];
  mediaTemp: any;

  constructor(private router: Router, private activatedRout: ActivatedRoute) { }

  ngOnInit() {
    const frutas = this.activatedRout.snapshot.paramMap.get('frutas');
    if (frutas) {
      try {
        this.frutasParaPlantar = JSON.parse(frutas);
      } catch (e) {
        console.error('Error parsing frutas:', e);
      }
    }
    const mediaTempStr = this.activatedRout.snapshot.paramMap.get('mediaTemp');
    if (mediaTempStr) {
      this.mediaTemp = parseFloat(mediaTempStr);
    }
  }

  mudaTela(){
    this.router.navigate(['/home']);
  }
}
