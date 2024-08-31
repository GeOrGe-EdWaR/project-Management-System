import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Output() reset = new EventEmitter();

  @Input() filters!: string[];

  filterForm: FormGroup = new FormGroup({
    searchValue: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    if (this.filters && this.filters.length) {
      this.filterForm.addControl(
        'searchKey',
        new FormControl('', Validators.required)
      );
    }
  }

  get isFilterApplied(): boolean {
    return (
      this.filterForm.get('searchValue')?.value ||
      this.filterForm.get('searchKey')?.value
    );
  }

  onSearch(): void {
    this.filterForm.markAllAsTouched();

    if (this.filterForm.valid) {
      if (this.filters) this.search.emit(this.filterForm.value);
      else {
        this.search.emit();
      }
    }
  }

  onReset(): void {
    this.filterForm.reset();

    this.reset.emit();
  }
}
