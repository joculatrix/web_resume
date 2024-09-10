import { Component } from '@angular/core';

import { AboutComponent } from './about.component';
import { SkillsComponent } from "./skills.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AboutComponent, SkillsComponent],
    template: `
<div class="container m-2 d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
    <div class="row">
        <div class="col-4">
            <about />
        </div>
        <div class="col-8">
            <skillsList />
        </div>
    </div>
</div>
`,
})
export class AppComponent {
    title = 'web_resume';
}
