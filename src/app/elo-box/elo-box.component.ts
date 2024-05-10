import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-elo-box',
  templateUrl: './elo-box.component.html',
  styleUrl: './elo-box.component.scss'
})
export class EloBoxComponent implements OnInit {
  ngOnInit() {
    
    (async function() {
      const data = [
        { date: "May 09, 2024", count: 2000 },
        { date: "May 10, 2024", count: 2050 },
        { date: "May 10, 2024", count: 2150 },
        { date: "May 10, 2024", count: 2023 },
        { date: "May 10, 2024", count: 2000 },
        { date: "May 10, 2024", count: 2200 },
        { date: "May 10, 2024", count: 2210 },
      ];
    
      new Chart(
        'eloChart',
        {
          type: 'line',
          data: {
            labels: data.map(row => row.date),
            datasets: [{
              label: 'Elo',
              data: data.map(row => row.count),
              fill: false,
              borderColor: 'rgb(255, 80, 192)',
              tension: 0.3,
              
            }]
          }
        }
      );
    })();
  }

}
