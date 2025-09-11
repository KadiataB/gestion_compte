import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Compte, CompteList } from '../model/compte';
import COMPTE_MOCK from '../shared/mock/compte.mock';
import { RouterLink, RouterOutlet } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CompteServiceService } from './service/compte-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [IonRouterOutlet, RouterOutlet],
  imports: [RouterOutlet, RouterLink, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
//  comptes: CompteList = COMPTE_MOCK;

//  compte:Compte = {
//     id: 0,
//     nom: 'ba',
//     prenom: 'kadia',
//     date: new Date().toISOString().split('T')[0]
//  }

//  compteSignal= signal<Compte>(this.compte)
//  ageSignal = computed(() => {
//   const age = new Date().getFullYear() - new Date(this.compteSignal().date).getFullYear();
//   return age;
//  });

// incrementDate() {
//   const date = new Date(this.compteSignal().date);
//   date.setFullYear(date.getFullYear() + 1);
//   // this.compteSignal.update(compte => ({ ...compte, date: date.toISOString().split('T')[0] }));
//   this.compteSignal.set({ ...this.compteSignal(), date: date.toISOString().split('T')[0] });
//  }
//   decrementDate() {
//     const date = new Date(this.compteSignal().date);
//     date.setFullYear(date.getFullYear() - 1);
//     this.compteSignal.update(compte => ({ ...compte, date: date.toISOString().split('T')[0] }));
// }

//  incrementAge(compte: Compte): void {
//   if(!compte.age) {
//     throw new Error('Age non défini');
//   }
//    compte.age++;
//  }
//   decrementAge(compte: Compte): void {
//     if(!compte.age) {
//       throw new Error('Age non défini');
//     }
//     if (compte.age > 0) {
//       compte.age--;
//     } else {
//       console.log('Age cannot be negative');
//     }

// }
service=inject(CompteServiceService)
comptes: CompteList = [];
ngOnInit(): void {

this.comptes = this.service.getAllComptes();
console.log('Comptes from service:', this.service.getAllComptes());
}


}
