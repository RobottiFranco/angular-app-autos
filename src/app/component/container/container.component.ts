import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/interface/auto';
import { AutosService } from 'src/app/service/auto.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  autos: Auto[] = [];

  constructor(private autosService: AutosService) {}

  ngOnInit(): void {
    this.autos = this.autosService.getAutos();
  }

}
