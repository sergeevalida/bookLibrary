import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import {ViewRegistrationComponent} from './components/view-registration/view-registration.component';
import {ViewRegistrationAuthorComponent} from './components/view-registration-author/view-registration-author.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';

const routes: Routes = [
  {
    path: 'addbook',
    component: HomeComponent
  },
  {
    path: 'addauthor',
    component: AddAuthorComponent
  },
  {
    path: 'admin/view/:bookId',
    component: ViewRegistrationComponent
  },
  {
    path: 'admin/viewauthor/:authorId',
    component: ViewRegistrationAuthorComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
