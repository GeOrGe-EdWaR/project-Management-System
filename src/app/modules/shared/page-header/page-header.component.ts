import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Output() navigateBackEvent = new EventEmitter();
  @Output() actionBtnEvent = new EventEmitter();

  @Input() pageTitle: string = '';
  @Input() navigateBackText: string = '';
  @Input() actionBtnText: string = '';

  handleNavigateBackClick(): void {
    this.navigateBackEvent.emit();
  }

  handleActionClick(): void {
    this.actionBtnEvent.emit();
  }
}
