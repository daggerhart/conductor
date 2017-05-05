"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = (function () {
    function Project(path, json) {
        this.path = path;
        this.json = json;
        this.slug = json.name.replace('/', '--');
        this.name = json.name;
        this.type = json.type;
        this.description = json.description;
        this.keywords = json.keywords;
        this.homepage = json.homepage;
        this.license = json.license;
        this.authors = json.authors;
        this.require = json.require;
        this.require_dev = json['require-dev'];
        this.autoload = json.autoload;
        this.autoload_dev = json['autoload-dev'];
        this.extra = json.extra;
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map