import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  headline:string="How Dreamshare";
  cards_content:Array<any>= [
    {
      img: '../../assets/laptop.png',
      step: 'Step 1',
      title: 'Sed leo enim, condimentum',
      description: 'Quisque liero libero, dictum non turpis in, lectus semper lorem. Donec rhoncus a leo sit amet facilisis'
    },
    {
      img: '../../assets/driving.png',
      step: 'Step 2',
      title: 'Morbi velit risus',
      description: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus sit amet porttitor est'
    },
    {
      img: '../../assets/beach.png',
      step: 'Step 3',
      title: 'Sed leo enim, condimentum',
      description: 'Quisque liero libero, dictum non turpis in, lectus semper lorem. Donec rhoncus a leo sit amet facilisis'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
