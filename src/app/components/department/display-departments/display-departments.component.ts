import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { first } from 'rxjs';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from '../interfaces/department';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-display-departments',
  templateUrl: './display-departments.component.html',
  styleUrls: ['./display-departments.component.css']
})
export class DisplayDepartmentsComponent implements OnInit {

  departments!: IDepartment[];
  department!: IDepartment;
  loading: boolean = true;

  constructor(
    private departmentService: DepartmentService,
    private toastr: ToastrService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartment().subscribe({
      next: (res: any) => {
        console.log(`Server Response Result: ${res.responseMessage}`);
        this.departments = res.responseResult;
      },
      error: (e) => console.error(e),
      complete: () => {
        this.loading = false;
      },
    });
  }

  removeDepartment(department: IDepartment) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + department.deptName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteDepartment(department.deptCode);
        this.department = {};

      },
    });
  }

  // Delete Department
  deleteDepartment(deptCode: any) {
    this.departmentService
      .deleteDepartment(deptCode)
      .pipe(
        finalize(() => {
          this.ngOnInit();
        }),
      )
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseResult}`);
        },
        error: (e) => console.error(e),
        complete: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Department Deleted',
            life: 3000,
          });
          console.info('complete');
        },
      });
  }

}
