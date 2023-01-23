import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | undefined;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['Usuario', 'Episode', 'Datecreated', 'Species'];

  loading: boolean = false;

  characters: any[] = [];

  total: number = 0;
  page = 1;
  limit = 30;

  constructor(private _characterService: CharactersService) { }

  ngOnInit(): void {
    this.listCharacters();
  }

  listCharacters() {
    this.loading = true;
    this._characterService.listCharacters(this.page, this.limit).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.results);
      this.characters = response.results;

      setTimeout(() => {
        this.total = response.info.count;

        this.paginator.length = this.total;
        this.paginator.pageIndex = this.page - 1;
        this.paginator.pageSize = this.limit;
        this.paginator.disabled = false;
      }, 0);

      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  pageChange(event: any) {
    this.limit = event.pageSize;
    this.page = event.pageIndex + 1;
    this.listCharacters();
  }

  sortData(event: any) {
  }

}
