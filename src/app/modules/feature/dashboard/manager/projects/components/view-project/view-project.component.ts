import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
})
export class ViewProjectComponent implements OnInit {
  pageId: number = 0;
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
  ngOnInit(): void {
    this.getProjectById(this.pageId);
  }
  addNewProjectForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });
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
}
