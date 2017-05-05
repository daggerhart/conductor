"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var splash_component_1 = require("./views/splash.component");
var create_project_component_1 = require("./views/create-project.component");
var project_component_1 = require("./views/project.component");
var package_component_1 = require("./views/package.component");
var not_found_component_1 = require("./views/not-found.component");
var appRoutes = [
    { path: 'project/:slug/package/:slug', component: package_component_1.PackageViewComponent },
    { path: 'project/:slug', component: project_component_1.ProjectViewComponent },
    { path: 'create', component: create_project_component_1.CreateProjectViewComponent },
    { path: 'splash', component: splash_component_1.SplashViewComponent },
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            splash_component_1.SplashViewComponent,
            create_project_component_1.CreateProjectViewComponent,
            project_component_1.ProjectViewComponent,
            package_component_1.PackageViewComponent,
            not_found_component_1.PageNotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map