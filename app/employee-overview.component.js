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
var router_1 = require("@angular/router");
var EmployeeOverviewComponent = /** @class */ (function () {
    function EmployeeOverviewComponent(router, activateroute) {
        this.router = router;
        this.activateroute = activateroute;
    }
    EmployeeOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateroute.parent.params.subscribe(function (param) {
            _this.parentRouterId = param['id'];
        });
    };
    EmployeeOverviewComponent.prototype.ngOnDestroy = function () {
    };
    EmployeeOverviewComponent = __decorate([
        core_1.Component({
            selector: 'employee-overview-component',
            template: "<h3>This overview employee</h3>"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], EmployeeOverviewComponent);
    return EmployeeOverviewComponent;
}());
exports.EmployeeOverviewComponent = EmployeeOverviewComponent;
//# sourceMappingURL=employee-overview.component.js.map