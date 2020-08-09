import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data: [];
  constructor() { }
  HighCharts = Highcharts;
  chartOptions = {};
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2]
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      creadits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      tooltip: {
        split: true,
        outside: true,
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        }
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        }
      },
      exporting: { enabled: false },
      series: [{
        data: this.data
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
