import { ViewTaskComponent } from './components/view-task/view-task.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { EmptasksService } from './services/emptasks.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-tasks',
  templateUrl: './emp-tasks.component.html',
  styleUrls: ['./emp-tasks.component.scss']
})
export class EmpTasksComponent implements OnInit {


  ngOnInit(): void {

    this.getAllTaksks()

  }


  constructor(

    private _EmptasksService: EmptasksService,
    public dialog: MatDialog

  ) {

  }



  // declerations:

  toDo: any[] = [];

  inProg: any[] = [];

  done: any[] = [];


  // 




  getAllTaksks() {

    let myparams = {
      pageSize: 1000,
      pageNumber: 1,
    }

    this._EmptasksService.onGetMyTasks(myparams).subscribe({
      next: (resp) => {

        this.toDo = resp.data.filter((c: { status: string; }) => c.status === 'ToDo');

        this.inProg = resp.data.filter((c: { status: string; }) => c.status === 'InProgress');

        this.done = resp.data.filter((c: { status: string; }) => c.status === 'done');

      },
      error: (err) => {

      }
    })


  }




  drop(event: CdkDragDrop<string[]>) {

    const draggedItemId = event.item.data;
    this._EmptasksService.onChangeTaskStatus(draggedItemId, event.container.id).subscribe({
      next: (res) => {


      }
    })


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }




  viewTask(taskId: number) {

    this._EmptasksService.onViewTask(taskId).subscribe({
      next: (resp) => {
        console.log(resp);
        this.dialog.open(ViewTaskComponent, {
          width: '40%',
          data: resp
        });
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {

      }
    })


  }







}
