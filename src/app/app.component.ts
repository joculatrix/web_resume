import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

import { AboutComponent } from './about.component';
import { EducationComponent } from './education.component';
import { SkillsComponent } from "./skills.component";
import { WorkComponent } from "./work.component";
import { ProjectsComponent } from "./projects.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AboutComponent, EducationComponent, SkillsComponent, WorkComponent, ProjectsComponent, NgStyle],
    template: `
<div class="container min-vw-75 max-vw-100 p-2 d-flex justify-content-center">
    <div class="row g-3">
        <div class="col-lg-4">
            <about />
        </div>
        <div class="col-lg-8">
            <skillsList />
        </div>
		<div class="col-lg-12">
			<projects />
		</div>
        <div class="col-lg-6">
            <education />
        </div>
		<div class="col-lg-6">
            <work />
        </div>
    </div>
</div>
`,
})
export class AppComponent implements AfterViewInit {
	// show content when ready (prevent flash of unstyled content)
	ngAfterViewInit(): void {
		document.querySelector('body')?.classList.remove('hidden');
	}
}
