import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
 
  type = 'bar';
  data = {
    labels: ["2020-01-01", "2020-01-02", "2020-01-03", "2020-01-04", "2020-01-05", "2020-01-06", "2020-01-07"],
    datasets: [   
      
      {
        label: "Sales",
        data: [165, 159, 180, 181, 156, 155, 140],
        type: 'line',
        pointRadius:0,
        borderColor:'#393E80',
        backgroundColor:'#393E80',
        fill: false
      },
      {
        label: "Potential Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        type: 'line',
        borderColor:'#864C96',
        backgroundColor:'#864C96',
        borderWidth:'3',
        pointRadius:0,
        borderDash:[5,15],
        fill: false,
      }
      ,{
        label: "Stock",
        data: [265, 259, 280, 281, 256, 255, 240],
        borderColor:'#d2d5ff',
        borderWidth: 1,
        backgroundColor:'#d2d5ff',
        stack: 'a'
      },
      {
        label: "StockOut",
        data: [-50, -9, -10, -11,-6, -5, -10],
        borderColor:'#FE367E',
        borderWidth: 1,
        backgroundColor:'#FE367E',
        stack: 'a'
      }
    ]
  };
  options = {
    responsive: true,
    cornerRadius: 200
  };
}