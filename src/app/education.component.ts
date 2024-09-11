import { Component } from '@angular/core';

import { school } from './data/education';

@Component({
    selector: 'education',
    standalone: true,
    imports: [],
    templateUrl: './templates/education.component.html',
})
export class EducationComponent {
    school = school;
}
