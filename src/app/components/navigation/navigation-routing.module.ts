import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '../characters/characters.component';
import { LoginComponent } from '../login/login.component';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', component: NavigationComponent, children: [
      {
        path: 'backoffice',
        component: CharactersComponent
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
