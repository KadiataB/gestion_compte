import { Injectable, signal } from '@angular/core';
import { Compte, CompteList } from '../../model/compte';
import COMPTE_MOCK from '../../shared/mock/compte.mock';

@Injectable({
  providedIn: 'root'
})
export class CompteServiceService {
  comptes=signal<CompteList>(COMPTE_MOCK)

  constructor() { }

  getAllComptes() {

    return this.comptes();
  }

  filtreByNumero(numero: string): CompteList {
    return this.comptes().filter(compte => compte.numero.includes(numero));
  }
  getCompte(numero: string): Compte | undefined {
    return this.comptes().find(compte => compte.numero === numero);
  }
}
