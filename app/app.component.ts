import { Component } from '@angular/core';
import { Project } from './models/project';
import { ProjectService } from './services/project.service';

@Component({
    selector: 'my-app',
    providers: [ProjectService],
    template: `
          <div class="flex flex--row flex--grow">
              <router-outlet></router-outlet>
          </div>
    `
})
export class AppComponent {
    projects ;
    selectedProject : Project;

    constructor(private projectsService: ProjectService){
        console.log(window.location.pathname);
    }

    ngOnInit(): void {
        this.getProjects();
    }

    getProjects(): void {
        this.projects = this.projectsService.getProjects();
    }
}
