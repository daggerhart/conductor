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
var project_1 = require("../models/project");
var PackageViewComponent = (function () {
    function PackageViewComponent() {
    }
    PackageViewComponent.prototype.ngOnChanges = function (changes) {
        //console.log(this.views);
        this.require_keys = Object.keys(this.project.require);
        this.require_dev_keys = Object.keys(this.project['require-dev']);
    };
    return PackageViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", project_1.Project)
], PackageViewComponent.prototype, "project", void 0);
PackageViewComponent = __decorate([
    core_1.Component({
        selector: 'package-view',
        template: "\n\n        <div class=\"flex flex--column app__sidebar\" style=\"flex: 0 0 35%; max-width: 35%;\">\n            <div *ngIf=\"project\">\n                <div class=\"flex flex--row project__title\">\n                    <h4>{{project.name}}</h4>\n                </div>\n                <details open>\n                    <summary>Composer</summary>\n                    <ul>\n                        <li id=\"project-composer-json\">composer.json</li>\n                        <li id=\"project-composer-lock\" class=\"hidden\">composer.lock</li>\n                    </ul>\n                </details>\n                <details open>\n                    <summary>Requirements</summary>\n                    <ul class=\"project__dependencies-list\">\n                        <li *ngFor=\"let packageName of require_keys\">\n                            {{packageName}}: {{project.require[packageName]}}\n                        </li>\n                    </ul>\n                </details>\n                <details>\n                    <summary>Developer Requirements</summary>\n                    <ul class=\"project__dependencies-list\">\n                        <li *ngFor=\"let packageName of require_dev_keys\">\n                            {{packageName}}: {{project['require-dev'][packageName]}}\n                        </li>\n                    </ul>\n                </details>\n            </div>\n        </div>\n        <div class=\"flex flex--column app__contents\"  style=\"flex: 1\">\n            <div id=\"wrapper-contents-container\">\n                <div class=\"flex flex--row project__title\">\n                    <h1>{{project.name}}</h1>\n                </div>\n                <p id=\"project-description\">{{project.description}}</p>\n                <p id=\"project-url\">{{project.homepage}}</p>\n                <div class=\"flex flex--row button__actions\">\n                    <button class=\"flex\" id=\"action-composer-install\">Install <i class=\"fa fa-spin fa-circle-o-notch hidden\"></i></button>\n                    <button class=\"flex hidden\" id=\"action-composer-update\">Update <i class=\"fa fa-spin fa-circle-o-notch hidden\"></i></button>\n                    <button class=\"flex\" id=\"action-composer-validate\">Validate <i class=\"fa fa-spin fa-circle-o-notch hidden\"></i></button>\n                    <!--<button class=\"flex\" id=\"action-composer-add\">Add <i class=\"fa fa-spin fa-circle-o-notch hidden\"></i></button>-->\n                    <!--<button class=\"flex\" id=\"action-composer-remove\">Remove <i class=\"fa fa-spin fa-circle-o-notch hidden\"></i></button>-->\n                </div>\n                <div class=\"project__output\" id=\"composer-output\"></div>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], PackageViewComponent);
exports.PackageViewComponent = PackageViewComponent;
//# sourceMappingURL=package.component.js.map