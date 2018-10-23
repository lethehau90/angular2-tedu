"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var notfound_component_1 = require("./notfound.component");
var employ_detail_component_1 = require("./employ-detail.component");
var employee_overview_component_1 = require("./employee-overview.component");
var employee_project_component_1 = require("./employee-project.component");
var login_component_1 = require("./login.component");
var check_login_guards_1 = require("./guards/check-login.guards");
var check_save_form_guard_1 = require("./guards/check-save-form.guard");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent, canActivate: [check_login_guards_1.CheckLoginGuards] },
    {
        path: 'employees-detail/:id', component: employ_detail_component_1.EmployDetailComponent, canDeactivate: [check_save_form_guard_1.CheckSaveFormGuard],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: employee_overview_component_1.EmployeeOverviewComponent },
            { path: 'projects', component: employee_project_component_1.EmployeeProjectsComponent }
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map