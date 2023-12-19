import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-4',
  templateUrl: './chart-4.component.html',
  styleUrls: ['./chart-4.component.scss']
})
export class Chart4Component {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Autos lavados por mes'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Cantidad'
      }
    },
    series: [
      {
        name: "Mazda",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Chevrolet',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Fiat',
        type: 'line',
        color: '#ed9e20',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })
}
