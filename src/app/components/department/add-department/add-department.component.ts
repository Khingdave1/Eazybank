import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  departmentForm: any = FormGroup;
  deptCodeValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departmentForm = this.formBuilder.group({
      deptCode: ['', Validators.required],
      deptName: ['', Validators.required],
    });
  }

  addDepartment() {
    let payload = {
      deptCode: this.departmentForm.value.deptCode,
      deptName: this.departmentForm.value.deptName,
      addedBy: 'Eazybank'
    }

    this.departmentService.addDepartment(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.router.navigate(['display-department'])

        },
        error: (e) => console.error(e),
      })
  }

  // save() {
  //   this.addDepartment()
  // }

  saveAndNew() {


    let payload = {
      deptCode: this.departmentForm.value.deptCode,
      deptName: this.departmentForm.value.deptName,
      addedBy: 'Eazybank'
    }

    this.departmentService.addDepartment(payload)
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          console.log(`Server Response Result: ${res.responseMessage}`);
          this.toastr.success(res.responseMessage)

          this.departmentForm.reset()

        },
        error: (e) => {
          console.log(e)
          this.toastr.success(e)
        }
      })
  }

}
