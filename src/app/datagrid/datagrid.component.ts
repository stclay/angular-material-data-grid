import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FetchDataService } from './shared/fetch-data.service';

@Component({
  templateUrl: 'datagrid.component.html'
})
export class QPLListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'employee_name',
    'employee_salary',
    'employee_age',
    'profile_image',
  ];

  records: any[];
  dataSource = new MatTableDataSource(this.records);

  constructor(private _datagridListService: FetchDataService) { }

  ngOnInit() {
    this._datagridListService.getRecords().subscribe(data => {
      this.records = data;
      this.dataSource = new MatTableDataSource(this.records);

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

