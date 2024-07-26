import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-information-geographic',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './information-geographic.component.html',
  styleUrl: './information-geographic.component.scss'
})
export class InformationGeographicComponent {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.chart = {
      type: 'GeoChart',
      data: [
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
      ],
      options: {
        displayMode: 'regions',
        colorAxis: {colors: ['#e7711c', '#4374e0']} // สีสำหรับความนิยมที่แตกต่างกัน
      }
    };
  }
}
