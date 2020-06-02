import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
    selector: 'justice-digital-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'filing';

    ngOnInit(): void {
        var $obs = of('hello world!');
    }
}
