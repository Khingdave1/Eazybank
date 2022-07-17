import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  departmentForm: any = FormGroup;
  currentItem: any;
  currentDepartmentId: any;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    // Get the current course Id from the url
    this.activatedRoute.params.subscribe((params: any) => {
      this.currentDepartmentId = params.id
    })

    // Get currency Code
    this.departmentService.getDepartment().subscribe((res: any) => {
      res.responseResult.forEach((e: any) => {
        if (e.deptCode === this.currentDepartmentId) {
          this.currentItem = e
        }
      });
    })

    // Department Form
    this.departmentForm = this.formBuilder.group({
      deptCode: ['', Validators.required],
      deptName: ['', Validators.required],
    });
  }


  // Edit Department
  editDepartment() {
    let payload = {
      deptCode: this.departmentForm.value.deptCode,
      deptName: this.departmentForm.value.deptName,
      addedBy: this.currentItem.addedBy
    }
    console.log(payload)

    this.departmentService.editDepartment(payload)
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

}
