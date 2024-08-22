import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ListHeader } from '../models/list-header.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Output() handleViewEvent = new EventEmitter();
  @Output() handleEditEvent = new EventEmitter();
  @Output() handleDeleteEvent = new EventEmitter();
  @Output() handleBlockEvent = new EventEmitter();
  @Output() handlePageEvent = new EventEmitter();

  @Input() headers: ListHeader[] = [];
  @Input() data: any[] = [];

  @Input() length: number = 0;
  @Input() pageNumber: number = 0;
  @Input() pageSize: number = 10;
  @Input() showFirstLastButtons: boolean = true;
  @Input() showPageSizeOptions: boolean = true;
  @Input() pageSizeOptions: number[] = [5, 10, 25];
  @Input() hidePageSize = false;
  @Input() disabled = false;

  imageUrl: string = 'https://upskilling-egypt.com:3003/';

  view(row: any): void {
    this.handleViewEvent.emit(row);
  }

  edit(row: any): void {
    this.handleEditEvent.emit(row);
  }

  delete(id: number): void {
    this.handleDeleteEvent.emit(id);
  }

  block(id: number): void {
    this.handleBlockEvent.emit(id);
  }

  paginate(e: any): void {
    this.handlePageEvent.emit(e);
  }
}
