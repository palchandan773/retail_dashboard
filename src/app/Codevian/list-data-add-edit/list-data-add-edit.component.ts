import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ListDetail {
  id: number;
  name: string;
  Phone: string;
  address: TotalAddress;
}
interface TotalAddress {
  city: string;
  Address_1: string;
  Address_2: string;
  postal_code: string;
}

const DATA: ListDetail[] = [
  {
    "id": 1,
    "name": "Chandan Pal",
    "Phone": "9545357258",
    "address": {
      "city": "Pune",
      "Address_1": "XYZ",
      "Address_2": "PQR",
      "postal_code": "412307"
    }
  },
  {
    "id": 2,
    "name": "Ganesh Gawade",
    "Phone": "9638527410",
    "address": {
      "city": "Pimpari",
      "Address_1": "Pimpalegurav",
      "Address_2": "Ram krishna mangal karyalay",
      "postal_code": "421547"
    }
  },
  {
    "id": 3,
    "name": "Jitendra P",
    "Phone": "",
    "address": {
      "city": "Karjat",
      "Address_1": "dfr",
      "Address_2": "lkj",
      "postal_code": "414857"
    }
  }
]


@Component({
  selector: 'app-list-data-add-edit',
  templateUrl: './list-data-add-edit.component.html',
  styleUrls: ['./list-data-add-edit.component.scss']
})
export class ListDataAddEditComponent implements OnInit {

  ListDetail: ListDetail;
  displayedColumns: string[] = ['id', 'name', 'Phone','city', 'Address_1','Address_2','postal_code','edit','delete'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource<ListDetail>(DATA);
  data = Object.assign( DATA);
  selection = new SelectionModel<ListDetail>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  removeSelectedRows() {
    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      console.log(this.data.findIndex(d => d === item));
      this.data.splice(index,1)
      this.dataSource = new MatTableDataSource<ListDetail>(this.data);
    });
    this.selection = new SelectionModel<ListDetail>(true, []);
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
