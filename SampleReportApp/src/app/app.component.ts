import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Global } from './global';

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', "..\..\node_modules\@progress\kendo-theme-default\dist\all.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
    private startDate: Date;

    ngOnInit() {
        this.startDate = new Date(Date.now());
    }

};
