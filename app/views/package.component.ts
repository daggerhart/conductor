import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../models/project';

@Component({
    selector: 'package-view',
    template: `

        <div class="flex flex--column app__sidebar" style="flex: 0 0 35%; max-width: 35%;">
            <div *ngIf="project">
                <div class="flex flex--row project__title">
                    <h4>{{project.name}}</h4>
                </div>
                <details open>
                    <summary>Composer</summary>
                    <ul>
                        <li id="project-composer-json">composer.json</li>
                        <li id="project-composer-lock" class="hidden">composer.lock</li>
                    </ul>
                </details>
                <details open>
                    <summary>Requirements</summary>
                    <ul class="project__dependencies-list">
                        <li *ngFor="let packageName of require_keys">
                            {{packageName}}: {{project.require[packageName]}}
                        </li>
                    </ul>
                </details>
                <details>
                    <summary>Developer Requirements</summary>
                    <ul class="project__dependencies-list">
                        <li *ngFor="let packageName of require_dev_keys">
                            {{packageName}}: {{project['require-dev'][packageName]}}
                        </li>
                    </ul>
                </details>
            </div>
        </div>
        <div class="flex flex--column app__contents"  style="flex: 1">
            <div id="wrapper-contents-container">
                <div class="flex flex--row project__title">
                    <h1>{{project.name}}</h1>
                </div>
                <p id="project-description">{{project.description}}</p>
                <p id="project-url">{{project.homepage}}</p>
                <div class="flex flex--row button__actions">
                    <button class="flex" id="action-composer-install">Install <i class="fa fa-spin fa-circle-o-notch hidden"></i></button>
                    <button class="flex hidden" id="action-composer-update">Update <i class="fa fa-spin fa-circle-o-notch hidden"></i></button>
                    <button class="flex" id="action-composer-validate">Validate <i class="fa fa-spin fa-circle-o-notch hidden"></i></button>
                    <!--<button class="flex" id="action-composer-add">Add <i class="fa fa-spin fa-circle-o-notch hidden"></i></button>-->
                    <!--<button class="flex" id="action-composer-remove">Remove <i class="fa fa-spin fa-circle-o-notch hidden"></i></button>-->
                </div>
                <div class="project__output" id="composer-output"></div>
            </div>
        </div>
    `
})
export class PackageViewComponent implements OnChanges{

    @Input() project : Project;

    public require_keys;
    public require_dev_keys;

    constructor(){}

    ngOnChanges(changes: SimpleChanges): void {
        //console.log(this.views);
        this.require_keys = Object.keys(this.project.require);
        this.require_dev_keys = Object.keys(this.project['require-dev']);
    }
}
