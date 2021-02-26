import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDataAddEditComponent } from './Codevian/list-data-add-edit/list-data-add-edit.component';
import { ListDataFilterSortComponent } from './Codevian/list-data-filter-sort/list-data-filter-sort.component';
import { ListDataComponent } from './Codevian/list-data/list-data.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


const routes: Routes = [{
  path:'',
  component : DefaultComponent,
  children :[{
    path : 'dashboard',component : DashboardComponent
  },
  {
    path : 'list',
    component : ListDataComponent
  },
  {
    path : 'filterList',
    component : ListDataFilterSortComponent
  },
  {
    path : 'AddList',
    component : ListDataAddEditComponent
  },

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
