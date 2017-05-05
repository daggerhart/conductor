"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_1 = require("../models/project");
// import { ElectronConfig } from 'electron-config';
var mock_projects_1 = require("./mock-projects");
var ProjectService = (function () {
    function ProjectService() {
        var _this = this;
        this.addProject = function (path, json) {
            _this.projects.push(new project_1.Project(path, json));
            //this.config.set('projects', this.projects);
        };
    }
    ProjectService.prototype.getProjects = function () {
        // this.config = new ElectronConfig();
        return Promise.resolve(mock_projects_1.PROJECTS);
    };
    ProjectService.prototype.getProject = function (slug) {
        this.projects.forEach(function (value, index) {
            if (value.slug == slug) {
                return this.projects[index];
            }
        });
    };
    ProjectService.prototype.setProjects = function (projects) {
        this.projects = projects;
    };
    ProjectService.prototype.refreshProjects = function () {
        this.setProjects([]);
        // if (this.config.has('projects')) {
        //     this.setProjects(this.config.get('projects'));
        // }
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable()
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map