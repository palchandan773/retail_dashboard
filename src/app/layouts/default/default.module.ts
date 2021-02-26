import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ListDataAddEditComponent } from 'src/app/Codevian/list-data-add-edit/list-data-add-edit.component';
import { ListDataFilterSortComponent } from 'src/app/Codevian/list-data-filter-sort/list-data-filter-sort.component';
import { ListDataComponent } from 'src/app/Codevian/list-data/list-data.component';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ListDataComponent,
    ListDataFilterSortComponent,
    ListDataAddEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
