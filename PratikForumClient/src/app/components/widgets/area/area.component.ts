import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor() { }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: {};
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Rastgele Verilerdir'
      },
      subtitle: {
        text: 'Kaynak: Wikipedia.org'
      },
      creadits: {
        enabled: false
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      exporting: { enabled: true },
      series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
      }]
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
