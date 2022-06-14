import { MatPaginator } from '@angular/material/paginator';
import { ArtiklDialogComponent } from './../../dialogs/artikl-dialog/artikl-dialog.component';
import { Artikl } from './../../../models/artikl';
import { ArtiklService } from './../../../services/artikl.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit, OnDestroy {

  dataSource!: MatTableDataSource<Artikl>;
  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];
  subscription!: Subscription;

  @ViewChild(MatSort, {static:false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;

  constructor(private artiklService: ArtiklService,
              private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.subscription = this.artiklService.getAllArtikls()
    .subscribe(data => {this.dataSource = new MatTableDataSource(data)
                        this.dataSource.sort = this.sort
                        this.dataSource.paginator = this.paginator;
    }),

    (error: Error) => {console.log(error.name + " " + error.message)}
  }

  public openDialog(flag: number, id?: number, naziv?: string, proizvodjac?: string){
    const dialogRef = this.dialog.open(ArtiklDialogComponent, {data:{id,naziv,proizvodjac}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe
    (result => {
      if(result == 1){
        this.loadData();
      }
    })
  }

  public applyFilter(filter:any){
    filter = filter.target.value;
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }

}
