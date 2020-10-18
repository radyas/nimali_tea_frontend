import { Observable } from 'rxjs';
import {Department} from "./department";

export interface Group {
  url: string;
  id: number;
  name: string;
}

export interface User {
  id: number;
  url: string;
  username: string;
  email: string;
  groups: Group[];
  first_name: string;
  last_name: string;
  address: string;
  dob: Date;
  nic: string;
  phone: number;
  department: Department;
  department_id: number;
}

export class Employee {
  id: number;
  url: string;
  username: string;
  email: string;
  groups: Group[];
  first_name: string;
  last_name: string;
  address: string;
  dob: string;
  nic: string;
  phone: number;
  department: Department;
  department_id: number;
}


export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract addUser(user: Employee): Observable<Employee>;
  abstract getCurrentUser(): Observable<User>;
  // abstract getContacts(): Observable<Contacts[]>;
  // abstract getRecentUsers(): Observable<RecentUsers[]>;
}
