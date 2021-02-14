import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpclientdataComponent } from './httpclientdata/httpclientdata.component';
import { ItemListComponent } from './item-list/item-list.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'students',
    component: StudentComponent
  },
  {
    path: 'employees',
    component: HttpclientdataComponent
  },
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }