import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { ProcessFormErrorsPipe } from './pipes/process-form-errors.pipe';

import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EmptyListComponent } from './list/empty-list/empty-list.component';
import { DeleteComponent } from './delete/delete.component';
import { CustomPaginatorComponent } from './list/custom-paginator/custom-paginator.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    ProcessFormErrorsPipe,
    HomeComponent,
    ListComponent,
    DeleteComponent,
    EmptyListComponent,
    CustomPaginatorComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxDropzoneModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxDropzoneModule,

    ProcessFormErrorsPipe,

    NavbarComponent,
    SidebarComponent,
    ListComponent,
    DeleteComponent,
    HomeComponent,
    PageHeaderComponent,
  ],
})
export class SharedModule {}
