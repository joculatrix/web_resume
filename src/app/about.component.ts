import { Component } from '@angular/core';

import { tidbits } from './data/tidbits';

@Component({
    selector: 'about',
    standalone: true,
    imports: [],
    templateUrl: './templates/about.component.html',
})
export class AboutComponent {
    name = 'Sloane Vaznis';
    pronouns = ['she', 'her'];
    // I'm preferring an ES5-style multiline string here vs a template because I think
    // the indentation lining up looks prettier:
    bio = 'I\'m a passionate learner and creator, with a background in ' +
          'programming, music composition and performance, visual art, ' +
          'writing, and poetry. Absorbing new skills and techniques brings ' +
          'me a unique satisfaction. I love to learn about abtract ' +
          'and theoretical topics! I am currently looking for work as a ' +
          'software developer or site reliability engineer.';
    tidbits = tidbits.map(tidbit => [Object.keys(tidbit)[0], Object.values(tidbit)[0]]);
}
