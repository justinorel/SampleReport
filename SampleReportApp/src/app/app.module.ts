import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReportAPIService }  from './report-api.service';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TelerikReportingModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ReportAPIService ]
})
export class AppModule { }