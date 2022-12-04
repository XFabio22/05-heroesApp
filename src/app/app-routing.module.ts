import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes=[
  {
    path:'auth',
    loadChildren : () => import ('./auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]
  },
  {
    path: '404',
    component: ErrorPagesComponent
  },
  {
    path: '**',
    //component:ErrorPagesComponent,
    redirectTo:'404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
