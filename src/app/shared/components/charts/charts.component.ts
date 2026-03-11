import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ChartData,
  Chart,
  LineController,
  BarController,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  Title,
  CategoryScale
} from 'chart.js';

import 'chartjs-adapter-date-fns';

Chart.register(
  LineController,
  BarController,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
);

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    let data: ChartData<'bar' | 'line', { x: string; y: number }[]> = {
      datasets: [
        {
          type: 'bar',
          label: 'Ventas',
          backgroundColor: 'rgba(54,162,235,0.5)',
          borderColor: 'rgb(54,162,235)',
          data: [
            { x: '2026-01-01', y: 120 },
            { x: '2026-01-02', y: 90 },
            { x: '2026-01-03', y: 150 },
            { x: '2026-01-04', y: 80 }
          ]
        },
        {
          type: 'line',
          label: 'Promedio',
          borderColor: 'rgb(255,99,132)',
          backgroundColor: 'rgba(255,99,132,0.3)',
          tension: 0.4,
          fill: false,
          data: [
            { x: '2026-01-01', y: 100 },
            { x: '2026-01-02', y: 100 },
            { x: '2026-01-03', y: 110 },
            { x: '2026-01-04', y: 105 }
          ]
        }
      ]
    };

    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Combo Time Scale'
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
