import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-2',
  templateUrl: './chart-2.component.html',
  styleUrls: ['./chart-2.component.scss']
})
export class Chart2Component {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Registros por marca'
    },
    xAxis: {
      categories: [
        'Mazda',
        'Chevrolet',
        'Fiat',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Mazda',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Chevrolet',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Fiat',
          y: 6.5,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

}
