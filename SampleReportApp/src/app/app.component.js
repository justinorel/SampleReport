"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var report_api_service_1 = require("./report-api.service");
var global_1 = require("./global");
var $ = require('jquery');
var AppComponent = (function () {
    function AppComponent(_reportService) {
        this._reportService = _reportService;
        this.viewerContainerStyle = (_a = {
                position: 'absolute',
                top: '5px',
                bottom: '5px',
                left: '5px',
                right: '5px',
                overflow: 'hidden'
            },
            _a['font-family'] = 'ms sans serif',
            _a);
        var _a;
    }
    AppComponent.prototype.readyHandler = function () {
        console.log('The viewer is ready.');
    };
    AppComponent.prototype.get = function () {
        var _this = this;
        this._reportService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (results) { _this.queryResults = results; console.log(_this.queryResults); }, function (error) { return _this.msg = error; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        moduleId: module.id,
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [report_api_service_1.ReportAPIService])
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map