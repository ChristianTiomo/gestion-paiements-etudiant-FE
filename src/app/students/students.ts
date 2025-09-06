import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../model/student';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {PaymentsAndStudentsService} from '../services/paymentsAndStudents-service';

// @ts-ignore
@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrls: ['./students.css']
})

export class Students implements OnInit{

  studentList!: Array<Student>;
  studentDataSource : MatTableDataSource<Student> = new MatTableDataSource<Student>();
  displayedColumns: string[] = ["id", "firstName", "lastName", "code", "programId","foto","payments" ];

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private payAndStudService: PaymentsAndStudentsService,
              private router: Router) {
  }

    ngOnInit(): void {
      this.payAndStudService.getAllStudents().subscribe(data=>{
        this.studentList=data;
        this.studentDataSource = new MatTableDataSource(this.studentList);
        this.studentDataSource.paginator = this.paginator;
        this.studentDataSource.sort = this.sort;
        console.log("STUDENT LIST " + JSON.stringify(this.studentDataSource));
      },error => {
        console.log(error)
      });
    }

  filterStudents($event: Event): void {
    const value : string = ($event.target as HTMLInputElement).value;
    this.studentDataSource.filter = value.trim().toLowerCase();
  }

  makePayment(element: any) : void {
    this.router.navigateByUrl(`/admin/student-details/${element.code}`);
   // this.router.navigateByUrl("/admin/student-details/"+element.code);
  }
}
