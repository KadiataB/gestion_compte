import { CompteList } from "../../model/compte";

const COMPTE_MOCK: CompteList = [
  {
    id: 1,
    numero: '123456789',
    dateCreation: '2023-01-01',
    dateBlocage: '2023-12-31',
    solde: 1000,
    type: 'Épargne',
    client: {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean'
    },
    duree: 12
  },
  {
    id: 2,
    numero: '987654321',
    dateCreation: '2023-02-01',
    dateBlocage: '2024-01-31',
    solde: 2000,
    type: 'Chèque',
    client: {
      id: 2,
      nom: 'Martin',
      prenom: 'Sophie'
    },
    duree: 0
  }


  ]

export default COMPTE_MOCK;
