import { Component, Input, OnInit } from '@angular/core';
import { Auto } from 'src/app/interface/auto';
import { AutosService } from 'src/app/service/auto.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
})
export class AutoComponent {
  @Input() auto!: Auto;

}
