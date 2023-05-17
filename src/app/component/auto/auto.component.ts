import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/interface/auto';
import { AutosService } from 'src/app/service/auto.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
})
export class AutoComponent implements OnInit {
  autos: Auto[] = [];

  constructor(private autosService: AutosService) {}

  ngOnInit(): void {
    this.autos = this.autosService.getAutos();
  }
}
