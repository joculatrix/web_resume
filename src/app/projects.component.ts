import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { projects } from './data/projects';

@Component({
	selector: 'projects',
	standalone: true,
	imports: [NgbCarouselModule],
	templateUrl: './templates/projects.component.html'
})
export class ProjectsComponent implements OnInit {
	projects = [...projects];
	@ViewChild('carousel') carousel!: NgbCarousel;

	ngOnInit(): void {
		this.carousel.pause();
	}
}
