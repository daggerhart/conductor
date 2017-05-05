import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';

// import electron from 'electron';
// import { exists as fsExists } from 'fs';
//
// const dialog = electron.dialog;
// const mainProcess = electron.remote.require('./main');

@Component({
    selector: 'splash-view',
    providers: [ProjectService],
    template: `
        <div class="flex flex--column main__landing" style="flex: 0 0 35%; padding: 0 1.25rem 1rem;">
            <div class="flex flex--row window__main--header">
                <!--<img src="../build/icon.svg" alt="Conductor" width="64"/>-->
                <h1>Conductor here</h1>
            </div>
            <div class="flex flex--column main__actions">
                <button id="open-project"
                        (click)="openProject()"><i class="fa fa-folder-open"></i> Existing project</button>
                <button id="new-project"
                        (click)="newProject()"><i class="fa fa-plus-circle"></i> New project</button>
                <button id="global"
                        (click)="globalProject()"><i class="fa fa-globe"></i> Global</button>
                <button id="open-settings"
                        (click)="conductorSettings()"><i class="fa fa-cog"></i> Settings</button>
            </div>
        </div>
        <details class="flex flex--column main__projects-list" open>
            <summary>Recent projects</summary>
            <ul id="project-list">
                <li *ngFor="let project of projects;">
                    <button 
                        (click)="onSelect(project)">
                        <i class="fa fa-folder"></i> {{project.name}}
                    </button>
                </li>
            </ul>
        </details>`
})
export class SplashViewComponent {
    projects;

    constructor(
        private router: Router,
        private projectsService: ProjectService
    ){}

    openProject(){
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
    }

    newProject(){}
    globalProject(){}
    conductorSettings(){}

    ngOnInit(): void {
        this.getProjects();
    }

    getProjects(): void {
        this.projectsService.getProjects().then(projects => this.projects = projects);
    }

    onSelect(project: Project) {
        this.router.navigate(['/project', project.slug]);
    }
}
