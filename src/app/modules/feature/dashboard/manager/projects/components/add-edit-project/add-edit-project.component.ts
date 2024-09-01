import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss'],
})
export class AddEditProjectComponent {
  pageId: number = 0;
  addNewProjectForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });
  constructor(
    private _ProjectsService: ProjectsService,
    private toastr: ToastrService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.pageId = _ActivatedRoute.snapshot.params['id'];
    if (this.pageId) {
      this.getProjectById(this.pageId);
    }
  }

  //get project by id to edit it
  getProjectById(id: number) {
    this._ProjectsService.getProjectById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.addNewProjectForm.patchValue({
          title: res.title,
          description: res.description,
        });
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  onSubmit(data: FormGroup) {
    data.markAllAsTouched();

    if (data.valid) {
      if (this.pageId) {
        // edit project
        this.onEditProject(data);
      } else {
        // add project
        this.onAddProject(data);
      }
    }
  }

  onEditProject(data: FormGroup): void {
    this._ProjectsService.editProject(this.pageId, data.value).subscribe({
      complete: () => {
        this.toastr.success('Success', 'Project editted successfully');

        this.navigateToProjectsList();
      },
    });
  }

  onAddProject(data: FormGroup): void {
    this._ProjectsService.onAddProject(data.value).subscribe({
      complete: () => {
        this.toastr.success('Success', 'Project added successfully');

        this.navigateToProjectsList();
      },
    });
  }

  navigateToProjectsList(): void {
    this._Router.navigate(['/dashboard/manager/projects/list']);
  }
}
