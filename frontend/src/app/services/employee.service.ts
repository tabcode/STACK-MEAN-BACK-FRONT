import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Employee from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  URL_API = "http://localhost:4000/api/employees";

  selectedEmployee: Employee = {
    name: '',
    position: '',
    office: '',
    salary: 0
  };

  employees: Employee[];

  constructor(private httpBackend: HttpClient) { }

  getEmployees() {
    const employees = this.httpBackend.get<Employee[]>(`${this.URL_API}`);
    return employees;
  }

  addEmployee(employee:Employee){
    return this.httpBackend.post(this.URL_API,employee);
  }

  deleteEmployee(_id:String){
    return this.httpBackend.delete(`${this.URL_API}/${_id}`);
  }

  editEmployee(employee:Employee){
    return this.httpBackend.put(`${this.URL_API}/${employee._id}`,employee);
  }
}
