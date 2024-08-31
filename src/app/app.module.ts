import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './core/interceptors/global.interceptor';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-fussion' }),
    ToastrModule.forRoot(),
    NgxDropzoneModule,
    HttpClientModule,
  ],
  exports: [NgxDropzoneModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      //here we add the interceptor we have created
      useClass: GlobalInterceptor,
      // this prperty for multible interceptor
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      //here we add the interceptor we have created
      useClass: SpinnerInterceptor,
      // this prperty for multible interceptor
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
