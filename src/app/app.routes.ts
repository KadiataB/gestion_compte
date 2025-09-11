import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CompteListComponent } from './pages/compte-list/compte-list.component';
import { CompteDetailComponent } from './pages/compte-detail/compte-detail.component';
import { CompteAddComponent } from './pages/compte-add/compte-add.component';
import { NotFoundPageComponent } from '../shared/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component:CompteListComponent
  },
  {
    path: 'comptes/details',
    component: CompteDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'add',
    component: CompteAddComponent
  },
  {
    path:'',
    redirectTo:'/comptes',
    pathMatch:'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
