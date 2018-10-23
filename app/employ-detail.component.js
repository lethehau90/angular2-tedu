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
var employee_service_1 = require("./service/employee.service");
var EmployDetailComponent = /** @class */ (function () {
    function EmployDetailComponent(router, activatedroute, employeeService) {
        this.router = router;
        this.activatedroute = activatedroute;
        this.employeeService = employeeService;
    }
    EmployDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedroute.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        //alert(this._id);
        this.employeeService.GetSingle(this._id).subscribe(function (data) {
            _this.employee = data;
        });
    };
    EmployDetailComponent.prototype.GotoEmplay = function () {
        this.router.navigate(['employee']);
    };
    EmployDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EmployDetailComponent = __decorate([
        core_1.Component({
            selector: 'employ-detail-component',
            templateUrl: './app/employ-detail.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, employee_service_1.EmployeeService])
    ], EmployDetailComponent);
    return EmployDetailComponent;
}());
exports.EmployDetailComponent = EmployDetailComponent;
//# sourceMappingURL=employ-detail.component.js.map