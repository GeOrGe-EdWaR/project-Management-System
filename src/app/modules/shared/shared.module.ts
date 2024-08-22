import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; // Added from the remote version

import { ProcessFormErrorsPipe } from './pipes/process-form-errors.pipe';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedComponent } from './shared.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [SharedComponent, ProcessFormErrorsPipe, DeleteComponent, HomeComponent, NavBarComponent, SideBarComponent, ListComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule, // Added from the remote version
    NgxDropzoneModule
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule, // Added from the remote version
    ProcessFormErrorsPipe,
    NgxDropzoneModule
  ],
})
export class SharedModule { }
