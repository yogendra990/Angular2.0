import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
// tslint:disable-next-line:whitespace
// tslint:disable-next-line:max-line-length
import {MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatSelectModule,
        MatIconModule,
        MatNativeDateModule,
        MatCheckboxModule
      } from '@angular/material';

import 'hammerjs';

import {Approuteconfig} from './app.route.config';
import { AngularAppServiceService } from '../assets/services/angular-app-service.service';
import { FilterPipePipe } from '../assets/customPipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    Approuteconfig
  ],
  providers: [AngularAppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
