import { Component, Input } from '@angular/core';
import { Portfolio } from 'src/app/time-line';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss']
})
export class RepositorioComponent {
    @Input() dados?:Portfolio[];
}
