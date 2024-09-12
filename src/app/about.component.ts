import { Component } from '@angular/core';

import { bio } from './data/bio';
import { tidbits } from './data/tidbits';

@Component({
    selector: 'about',
    standalone: true,
    imports: [],
    templateUrl: './templates/about.component.html',
})
export class AboutComponent {
	bio = bio;
    tidbits = tidbits.map(tidbit => [Object.keys(tidbit)[0], Object.values(tidbit)[0]]);
}
