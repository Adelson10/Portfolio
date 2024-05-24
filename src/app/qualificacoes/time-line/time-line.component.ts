import { Component, Input } from '@angular/core';
import { TimeLine } from 'src/app/time-line';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {
  @Input() lista?:Array<TimeLine>;
}
