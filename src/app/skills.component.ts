import { Component } from '@angular/core';

import { skills } from './skills';

@Component({
    selector: 'skillsList',
    standalone: true,
    imports: [],
    templateUrl: './skills.component.html',
})
export class SkillsComponent {
    skills = [...skills];
}
