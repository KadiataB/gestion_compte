import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CompteServiceService } from '../../app/service/compte-service.service';

export const paramsGuard: CanActivateFn = (route, state) => {
  const numero = route.paramMap.get('numero');
  const compteService = inject(CompteServiceService);
  if(!numero) {
    return false;
  }
  const compte = compteService.getCompte(numero);
  return true;
};
