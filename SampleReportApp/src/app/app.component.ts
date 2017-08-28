import { Component } from '@angular/core';
import { ReportAPIService } from './report-api.service';
import { Global } from './global';
const $ = require('jquery');

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {

    constructor(
        private _reportService : ReportAPIService ) { }

    private msg: string;

    private queryResults: JSON;
    private usageReport: any;

    viewerContainerStyle = {
        position: 'absolute',
        top: '5px',
        bottom: '5px',
        left: '5px',
        right: '5px',
        overflow: 'hidden',
        ['font-family']: 'ms sans serif'
    };

    readyHandler() {
        console.log('The viewer is ready.');
    }

    get(): void {
        this._reportService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(results => { this.queryResults = results; console.log(this.queryResults);},
            error => this.msg = <any>error);
    }

};
