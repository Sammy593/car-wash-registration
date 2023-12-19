import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-3',
  templateUrl: './chart-3.component.html',
  styleUrls: ['./chart-3.component.scss']
})
export class Chart3Component {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Calificaciones'
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Muy insatisfactorio',
          y: 1.0,
          color: '#044342',
        },
        {
          name: 'Insatisfactorio',
          y: 3.8,
          color: '#7e0505',
        },
        {
          name: 'Regular',
          y: 2.5,
          color: '#ed9e20',
        },
        {
          name: 'Bueno',
          y: 10.5,
          color: '#eeeee',
        },
        {
          name: 'Muy bueno',
          y: 30.5,
          color: '#916048',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })
}
