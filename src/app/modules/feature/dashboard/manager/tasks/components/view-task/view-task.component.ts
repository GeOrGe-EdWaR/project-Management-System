import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class ViewTaskComponent implements OnInit {
  //to clear input

  // mat select value
  toppings = new FormControl('');
  // list of employees
  employeesList: any[] = [];
  // list of Projects
  ProjectList: any[] = [];
  // list of Projects
  //task id to catch the id to edit it
  taskId: number = 0;
  constructor(
    private _TaskService: TaskService,
    private ToastrService: ToastrService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.taskId = this._ActivatedRoute.snapshot.params['id'];
    if (this.taskId) {
      this.getTaskById(this.taskId);
    }
  }
  ngOnInit(): void {
    this.getEmployeesList();
    this.getProjectList();
    this, this.getTaskById(this.taskId);
    this.viewTaskForm.disable();
  }
  //add edit reactive form
  viewTaskForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    employeeId: new FormControl(null, Validators.required),
    projectId: new FormControl(null, Validators.required),
  });
  // get All Employee to list it

  getEmployeesList() {
    this._TaskService.getAllEmployees().subscribe({
      next: (res: any) => {
        this.employeesList = res.data;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  // get All Projects to list it
  getProjectList() {
    this._TaskService.getAllProjects().subscribe({
      next: (res: any) => {
        this.ProjectList = res.data;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  // get task By id to edit it
  getTaskById(id: number) {
    this._TaskService.getTaskById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.viewTaskForm.patchValue({
          title: res.title,
          description: res.description,
          employeeId: res?.employee?.id,
          projectId: res?.project?.id,
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

  navigateToTasksList(): void {
    this._Router.navigateByUrl('/dashboard/manager/tasks/list');
  }
}
