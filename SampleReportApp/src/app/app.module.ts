import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReportAPIService } from './report-api.service';
import { IntlModule } from '@progress/kendo-angular-intl';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        DateInputsModule,
        BrowserAnimationsModule,
        IntlModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ReportAPIService ]
})
export class AppModule { }