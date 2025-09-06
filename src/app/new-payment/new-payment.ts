import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PaymentsAndStudentsService} from '../services/paymentsAndStudents-service';

@Component({
  selector: 'app-new-payment',
  standalone: false,
  templateUrl: './new-payment.html',
  styleUrl: './new-payment.css'
})
export class NewPayment implements OnInit{
  pdfFileUrl!: string;

  studentCode!: string;
  paymentFormGroup!: FormGroup;
  showProgess: boolean = false;

  paymentTypes = [
    { value: 'CASH', label: 'CASH' },
    { value: 'VERSEMENT', label: 'VERSEMENT' },
    { value: 'CHECK', label: 'CHECK' },
    { value: 'TRANSFERT', label: 'TRANSFERT' },
    { value: 'DEPOT', label: 'DEPOT' }
  ];

  paymentStatus = [
    { value: 'CREATED', label: 'CREATED' },
    { value: 'CHECKED', label: 'CHECKED' },
    { value: 'TRANSFERRED', label: 'TRANSFERRED' },
    { value: 'DEPOSITED', label: 'DEPOSITED' },
    { value: 'VALIDATED', label: 'VALIDATED' },
    { value: 'REJECTED', label: 'REJECTED' },
    { value: 'CANCELED', label: 'CANCELED' }
  ];

  constructor(private activateRoute: ActivatedRoute,
              private fb: FormBuilder,
              private payAndStudService: PaymentsAndStudentsService) {}

    ngOnInit(): void {
    this.studentCode = this.activateRoute.snapshot.params['code'];

      this.paymentFormGroup=this.fb.group({
        date: this.fb.control(''),
        amount: this.fb.control(''),
        type: this.fb.control(''),
        status: this.fb.control(''),
        studentCode: this.fb.control(this.studentCode),
        fileSource: this.fb.control(''),
        fileName: this.fb.control(''),
        file: this.fb.control(''),
      })
    }

  selectedFile!: File;
  selectedFileName: string = '';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.selectedFile = file;      // save the file itself
      this.selectedFileName = file.name;
      this.pdfFileUrl = window.URL.createObjectURL(file);
    }
  }

  savePayment() {
    this.showProgess = true;
    let date: Date = new Date(this.paymentFormGroup.value.date);
    let formattedDate: string = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

    let formData: FormData = new FormData();
    formData.append('date', formattedDate);
    formData.append('amount', this.paymentFormGroup.value.amount);
    formData.append('type', this.paymentFormGroup.value.type);
    formData.append('status', this.paymentFormGroup.value.status);
    formData.append('studentCode', this.paymentFormGroup.value.studentCode);
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);  // ✅ now works
    }
    this.payAndStudService.savePayment(formData).subscribe(data=> {
      this.showProgess = false;
         alert("Payment Saved Successfully")
    },error => {
      console.log(error)
    })
  }

  cancelPayment() {

  }

  afterLoadComplete($event: any) {
  console.log($event)
  }
}
