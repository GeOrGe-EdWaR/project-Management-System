import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';


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
import { FilterComponent } from './filter/filter.component';
import { ProfileComponent } from './profile/profile.component';



const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
  hideRequiredMarker: true,
};

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
    FilterComponent,
    ProfileComponent,
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
    MatDividerModule,
    NgxDropzoneModule,
    NgxSpinnerModule,
    NgxChartsModule,
    DragDropModule
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
    MatDividerModule,
    NgxDropzoneModule,
    NgxSpinnerModule,
    DragDropModule,

    ProcessFormErrorsPipe,

    NavbarComponent,
    SidebarComponent,
    ListComponent,
    DeleteComponent,
    HomeComponent,
    PageHeaderComponent,
    FilterComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldDefaultOptions,
    },
  ],
})
export class SharedModule { }
