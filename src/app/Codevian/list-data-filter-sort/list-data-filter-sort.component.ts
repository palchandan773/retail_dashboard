import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export class ListDetail {
  id: number;
  name: string;
  Phone: string;
  address: TotalAddress;
}
class TotalAddress {
  city: string;
  Address_1: string;
  Address_2: string;
  postal_code: string;
}

const DATA: ListDetail[] = [
  {
    "id": 1,
    "name": "Chandan Pal",
    "Phone": "",
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
    "Phone": "9545214535",
    "address": {
      "city": "Karjat",
      "Address_1": "dfr",
      "Address_2": "lkj",
      "postal_code": "414857"
    }
  }
]
@Component({
  selector: 'app-list-data-filter-sort',
  templateUrl: './list-data-filter-sort.component.html',
  styleUrls: ['./list-data-filter-sort.component.scss']
})
export class ListDataFilterSortComponent implements OnInit {

  ListDetail: ListDetail;
  displayedColumns: string[] = ['id', 'name', 'Phone','city', 'Address_1','Address_2','postal_code'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource<ListDetail>(DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
