import { Component } from '@angular/core';

import { AboutComponent } from './about.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AboutComponent],
    template: `
<div class='container m-2 justify-content-center'>
    <about />
</div>
`,
})
export class AppComponent {
    title = 'web_resume';
}
