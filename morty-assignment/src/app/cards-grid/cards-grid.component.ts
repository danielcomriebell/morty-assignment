import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss']
})
export class CardsGridComponent implements OnInit {
  headline:string="Discover Holiday Activity";
  cards_content:Array<any>= [
    {
      title: 'Sports and Activities',
      img: '../../assets/running.png',
    },
    {
      title: 'Wellness and Health',
      img: '../../assets/poolside.png',
    },
    {
      title: 'Extreme Sports and Expeditions',
      img: '../../assets/cliff.png',
    },
    {
      title: 'Games',
      img: '../../assets/games.png',
    },
    {
      title: 'Culture and Education',
      img: '../../assets/culture.png',
    },
    {
      title: 'Enjoyment and Relaxation',
      img: '../../assets/spa.png',
    },
    {
      title: 'Travelling',
      img: '../../assets/selfie.png',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
