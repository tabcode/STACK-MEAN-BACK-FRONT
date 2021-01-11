import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms'
import Employee from 'src/app/models/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res
      },
      err => console.log(err)
    )
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.editEmployeeSave(form.value,form)
    } else {
      this.employeeService.addEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteEmployee(_id: String) {
    const res = confirm('Are you sure you want to delete it?');
    if (res) {
      this.employeeService.deleteEmployee(_id).subscribe(
        res => {
          this.getEmployees();
        },
        err => console.log(err)
      );
    }
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  editEmployeeSave(employee: Employee,form: NgForm) {
    return this.employeeService.editEmployee(employee).subscribe(
      res => {
        this.getEmployees();
        form.reset();
      },
      err => console.log(err)
    );
  }

  resetForm(form: NgForm) {
    this.getEmployees();
    form.reset();
  }
}
