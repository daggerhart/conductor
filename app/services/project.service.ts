import { Injectable } from '@angular/core';
import { Project } from '../models/project';

// import { ElectronConfig } from 'electron-config';
import { PROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {

    config;
    projects: Array<Project>;

    getProjects(): Promise<Project[]> {
        // this.config = new ElectronConfig();
        return Promise.resolve(PROJECTS);
    }

    getProject( slug ){
        this.projects.forEach(function(value, index){
            if ( value.slug == slug ){
                return this.projects[index];
            }
        });
    }

    setProjects(projects){
        this.projects = projects;
    }
    refreshProjects() {
        this.setProjects([]);
        // if (this.config.has('projects')) {
        //     this.setProjects(this.config.get('projects'));
        // }
    }
    addProject = (path, json) => {
        this.projects.push( new Project(path,json) );
        //this.config.set('projects', this.projects);
    };
}
