import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { projects } from './data/projects';

@Component({
	selector: 'projects',
	standalone: true,
	imports: [NgbCarouselModule],
	templateUrl: './templates/projects.component.html'
})
export class ProjectsComponent {
	projects = [...projects];
}
