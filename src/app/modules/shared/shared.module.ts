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
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { ProcessFormErrorsPipe } from './pipes/process-form-errors.pipe';

import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    ProcessFormErrorsPipe,
    HomeComponent,
    ListComponent,
  ],
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
    MatMenuModule,
    MatPaginatorModule,
    NgxDropzoneModule,
    
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule, // Added from the remote version
    MatMenuModule,
    MatPaginatorModule,
    ProcessFormErrorsPipe,
    NgxDropzoneModule,
    NavbarComponent,
    SidebarComponent,
    ListComponent,
    HomeComponent,
  ],
})
export class SharedModule { }
