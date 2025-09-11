// export interface Compte {
//   id:number;
//   nom:string;
//   prenom:string;
//   age?:number;
//   date: string;
// }

// export type CompteList = Compte[];

export interface Compte {
  id:number;
  numero:string;
  dateCreation:string;
  dateBlocage:string;
  solde:number;
  type:string;
  client:Client;
  duree:number;
}


export interface Client {
  id:number;
  nom:string;
  prenom:string;

}


export type CompteList = Compte[];
