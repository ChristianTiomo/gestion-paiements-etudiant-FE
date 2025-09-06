import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PaymentsAndStudentsService} from '../services/paymentsAndStudents-service';
import {Payment} from '../model/payment';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../model/student';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails implements OnInit{
    codeStudent!: string;
    studentPaymentsList!: Array<Payment>
    studentPaymentsDataSource : MatTableDataSource<Payment> = new MatTableDataSource<Payment>();
  public displayedColumns : string[] = ["id", "date", "amount", "type", "status", "file", "studentName"];

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(private activatedRoute: ActivatedRoute,
                private payAndStudService: PaymentsAndStudentsService,
                private router: Router,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {

      this.codeStudent=this.activatedRoute.snapshot.params['code'];
      this.payAndStudService.getStudentPayments(this.codeStudent).subscribe(data=>{
        this.studentPaymentsList=data;
        this.studentPaymentsDataSource = new MatTableDataSource(this.studentPaymentsList);
        this.studentPaymentsDataSource.paginator = this.paginator;
        this.studentPaymentsDataSource.sort = this.sort;
      }, error => {
        console.log(error)
      })
    }

  newPayment(){
     this.router.navigateByUrl("/admin/new-payment/"+this.codeStudent )
  }


}
