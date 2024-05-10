import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-player-basic-legion-choice',
  templateUrl: './player-basic-legion-choice.component.html',
  styleUrl: './player-basic-legion-choice.component.scss'
})


export class PlayerBasicLegionChoiceComponent implements OnInit{
  
  ngOnInit(): void {
    (async function() {
      const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'LEGION CHOICE',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    
      new Chart(
        'legionChoice',
        {
          type: 'pie',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'Elo',
              data: data.datasets,   
              borderColor: 'rgb(255, 80, 192)',
              type: 'doughnut',
            }]
          }
        }
      );
    })();
  }
}

/*


   const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
  }





*/