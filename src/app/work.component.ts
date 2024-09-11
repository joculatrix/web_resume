import { Component } from '@angular/core';

import { jobs } from './data/jobs';

@Component({
	selector: 'work',
	standalone: true,
	imports: [],
	templateUrl: './templates/work.component.html'
})
export class WorkComponent {
	jobs = [...jobs];
}
