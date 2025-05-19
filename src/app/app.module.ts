import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import this
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ Required
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material-module';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { MatTableExporterModule } from 'mat-table-exporter';
import { GoogleMapsModule } from '@angular/google-maps';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),
    BrowserAnimationsModule,NgbCollapseModule
    // , MatTableExporterModule
    ,MaterialModule, 
    GoogleMapsModule,
     NgxSpinnerModule.forRoot({ type: 'ball-atom' }),
     ServiceWorkerModule.register('ngsw-worker.js', {
       enabled: !isDevMode(),
       // Register the ServiceWorker as soon as the application is stable
       // or after 30 seconds (whichever comes first).
       registrationStrategy: 'registerWhenStable:30000'
     }),

    //  ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    // }),
    //  NgxSpinnerModule.forRoot({ type: 'line-scale-party' }),
  ],
  providers: [provideHttpClient(),{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
