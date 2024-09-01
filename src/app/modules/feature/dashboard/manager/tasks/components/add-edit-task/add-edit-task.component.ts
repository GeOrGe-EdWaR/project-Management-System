import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss'],
})
export class AddEditTaskComponent implements OnInit {
  option: any[] = [];

  selectFormControl = new FormControl('', Validators.required);
  //project ID list
  projectIdList: any[] = [];
  // mat select value for employees
  employees = new FormControl('');
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
  }
  //add edit reactive form
  addEditTaskForm = new FormGroup({
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
        this.addEditTaskForm.patchValue({
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

  onSubmit(data: FormGroup) {
    data.markAllAsTouched();

    if (data.valid) {
      if (this.taskId) {
        this.onEditTask(data);
      } else {
        this.onAddTask(data);
      }
    }
  }

  onEditTask(data: FormGroup): void {
    this._TaskService.updateTask(this.taskId, data.value).subscribe({
      complete: () => {
        this.ToastrService.success('Success', 'Task editted successfully');

        this.navigateToTasksList();
      },
    });
  }

  onAddTask(data: FormGroup): void {
    this._TaskService.addNewTask(data.value).subscribe({
      complete: () => {
        this.ToastrService.success('Success', 'Task added successfully');

        this.navigateToTasksList();
      },
    });
  }

  navigateToTasksList(): void {
    this._Router.navigate(['/dashboard/manager/tasks/list']);
  }
}
