import { Component } from '@angular/core';

import { skills } from './data/skills';

@Component({
    selector: 'skillsList',
    standalone: true,
    imports: [],
    templateUrl: './templates/skills.component.html',
})
export class SkillsComponent {
    skills = [...skills];
}
