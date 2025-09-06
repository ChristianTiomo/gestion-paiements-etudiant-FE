import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaymentsAndStudentsService} from '../services/paymentsAndStudents-service';
import {Payment} from '../model/payment';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-payments',
  standalone: false,
  templateUrl: './payments.html',
  styleUrl: './payments.css'
})
export class Payments implements OnInit{

  paymentList!: Array<Payment>;
  paymentDataSource : MatTableDataSource<Payment> = new MatTableDataSource<Payment>();
  public displayedColumns : string[] = ["id", "date", "amount", "type", "status", "file", "studentName" ];

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private payAndStudService: PaymentsAndStudentsService) {
  }

    ngOnInit(): void {
    this.payAndStudService.getAllPayments().subscribe(data=>{
         this.paymentList=data;
         this.paymentDataSource = new MatTableDataSource(this.paymentList);
         this.paymentDataSource.paginator=this.paginator;
         this.paymentDataSource.sort=this.sort;
         console.log("PAYMENT LIST " + JSON.stringify(this.paymentDataSource));

       },error => {
         console.log(error)
       })
    }

  filterPayments($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    this.paymentDataSource.filter = value.trim().toLowerCase();
  }

  /*makePayment(element: any) {
    this.router.navigateByUrl("/payments");
  }*/
}
