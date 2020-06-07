import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Component({
    selector: 'jd-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var test =
            'fdsfs fsdfsd fsdf sdf sdf sdf' +
            'sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sd fsd fsd fsd fsd f sf sd fsd fsd' +
            'f sdf sdf sfgsdf gsf gfsd gfd gfd gdfgfdg dfgfd gfsd  sd fs fsd f sdf sd f';

        var blah = of(null);
    }
}
