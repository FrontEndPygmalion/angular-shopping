import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent} from './pages/detail/detail.component'
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes =  [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: DetailComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
