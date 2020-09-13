import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: []
  },
  { path: 'entry',
   loadChildren:  () => import('./pages/entry/entry.module').then(x => x.EntryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
