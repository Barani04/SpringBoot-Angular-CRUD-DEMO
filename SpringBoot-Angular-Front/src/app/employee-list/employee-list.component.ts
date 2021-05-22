import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private emoloyeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.emoloyeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number){
    this.emoloyeeService.deleteEmployee(id).subscribe(data =>{
      console.log('deleted employee:' + data);
      this.getEmployees();
    },error => console.log(error)
    )
  }
  
  viewEmployee(id: number){
    this.router.navigate(['employee-detail', id])
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }

}
