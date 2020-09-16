import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ActionComponent } from './pages/action/action.component';
import { ResultComponent } from './pages/result/result.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'entry',
    loadChildren: () => import('./pages/entry/entry.module').then(x => x.EntryModule)
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'action',
    component: ActionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
