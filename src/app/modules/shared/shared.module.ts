import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProcessFormErrorsPipe } from './pipes/process-form-errors.pipe';

import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent, ProcessFormErrorsPipe],
  imports: [CommonModule, SharedRoutingModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, ProcessFormErrorsPipe],
})
export class SharedModule {}
