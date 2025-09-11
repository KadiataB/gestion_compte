import { Component, inject, signal } from '@angular/core';
import { CompteList } from '../../../model/compte';
import COMPTE_MOCK from '../../../shared/mock/compte.mock';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CompteServiceService } from '../../service/compte-service.service';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.css'
})
export class CompteListComponent {
//  comptes: CompteList = COMPTE_MOCK;

//  comptes= signal<CompteList>(COMPTE_MOCK);
 service = inject(CompteServiceService);
comptes = signal<CompteList>(this.service.getAllComptes());


 filtreByNumero() {
    const numero = (document.getElementById('numero') as HTMLInputElement).value;
    if (numero) {
      // return this.service.filtreByNumero(numero);
      return this.comptes.set(this.service.filtreByNumero(numero));
    }
    return this.service.getAllComptes();
  }

}
