import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
    selector: 'app-widget-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

    constructor() { }
    HighCharts = Highcharts;
    chartOptions = {};
    @Input() data = [];
    ngOnInit(): void {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Rastgele Veridir'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: this.data
            }]
        };
        HC_exporting(Highcharts),
            setTimeout(() => {
                window.dispatchEvent(
                    new Event('resize')
                );
            }, 300);
    }
}
