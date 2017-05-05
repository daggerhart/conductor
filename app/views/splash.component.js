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
var project_service_1 = require("../services/project.service");
// import electron from 'electron';
// import { exists as fsExists } from 'fs';
//
// const dialog = electron.dialog;
// const mainProcess = electron.remote.require('./main');
var SplashViewComponent = (function () {
    function SplashViewComponent(router, projectsService) {
        this.router = router;
        this.projectsService = projectsService;
    }
    SplashViewComponent.prototype.openProject = function () {
        console.log('jhere');
        // let folder = dialog.showOpenDialog(mainProcess.mainWindow, {
        //     properties: ['openDirectory'],
        // });
        // console.log(folder);
        //
        // if (!folder) {
        //     return;
        // }
        // fsExists(folder + '/composer.json', function (exists) {
        //     if (exists) {
        //         const composerJson = require(folder + '/composer.json');
        //         this.projectsServices.addProject(folder, composerJson)
        //     } else {
        //         dialog.showMessageBox(mainProcess.mainWindow, {
        //             'type': 'error',
        //             'buttons': [],
        //             'message': 'There is no composer.json in that directory'
        //         });
        //     }
        // });
    };
    SplashViewComponent.prototype.newProject = function () { };
    SplashViewComponent.prototype.globalProject = function () { };
    SplashViewComponent.prototype.conductorSettings = function () { };
    SplashViewComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    SplashViewComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    SplashViewComponent.prototype.onSelect = function (project) {
        this.router.navigate(['/project', project.slug]);
    };
    return SplashViewComponent;
}());
SplashViewComponent = __decorate([
    core_1.Component({
        selector: 'splash-view',
        providers: [project_service_1.ProjectService],
        template: "\n        <div class=\"flex flex--column main__landing\" style=\"flex: 0 0 35%; padding: 0 1.25rem 1rem;\">\n            <div class=\"flex flex--row window__main--header\">\n                <!--<img src=\"../build/icon.svg\" alt=\"Conductor\" width=\"64\"/>-->\n                <h1>Conductor here</h1>\n            </div>\n            <div class=\"flex flex--column main__actions\">\n                <button id=\"open-project\"\n                        (click)=\"openProject()\"><i class=\"fa fa-folder-open\"></i> Existing project</button>\n                <button id=\"new-project\"\n                        (click)=\"newProject()\"><i class=\"fa fa-plus-circle\"></i> New project</button>\n                <button id=\"global\"\n                        (click)=\"globalProject()\"><i class=\"fa fa-globe\"></i> Global</button>\n                <button id=\"open-settings\"\n                        (click)=\"conductorSettings()\"><i class=\"fa fa-cog\"></i> Settings</button>\n            </div>\n        </div>\n        <details class=\"flex flex--column main__projects-list\" open>\n            <summary>Recent projects</summary>\n            <ul id=\"project-list\">\n                <li *ngFor=\"let project of projects;\">\n                    <button \n                        (click)=\"onSelect(project)\">\n                        <i class=\"fa fa-folder\"></i> {{project.name}}\n                    </button>\n                </li>\n            </ul>\n        </details>"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        project_service_1.ProjectService])
], SplashViewComponent);
exports.SplashViewComponent = SplashViewComponent;
//# sourceMappingURL=splash.component.js.map