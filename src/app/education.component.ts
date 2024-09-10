import { Component } from "@angular/core";

@Component({
    selector: 'education',
    standalone: true,
    imports: [],
    templateUrl: './education.component.html',
})
export class EducationComponent {
    school_name = 'Western Colorado University';
    degree = 'Bachelor of Arts - Music';
    minors = ['Computer Science', 'Music Technology'];
    grad_date = 'May 2024';

    img_src = '/assets/wcu_logo.png';
}
