import {Student} from './student';
import {PaymentType} from './paymentType';
import {PaymentStatus} from './paymentStatus';

export interface Payment {
  id: number;
  date: Date;
  amount: string;
  type: PaymentType;
  status: PaymentStatus;
  file: string;
  student: Student;
}

