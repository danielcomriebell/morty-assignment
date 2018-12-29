import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  headline:String="Meet a partner for your best";
  partner_content:Array= [
    {
      img: '../../assets/person3.png',
      img_2: '../../assets/music2.png',
      partner_name: 'Bradley Hunter',
      description: 'Based in Chicago. I love playing tennis and loud music.'
    },
    {
      img: '../../assets/person2.png',
      img_2: '../../assets/brush.png',
      partner_name: 'Marie Bennett',
      description: 'Currently living in Colorado. Lover of art, languages and travelling.'
    },
    {
      img: '../../assets/person1.png',
      img_2: '../../assets/camera.png',
      partner_name: 'Diana Wells',
      description: 'Living in Athens, Greece. I love black and white classics, chillout music and green tea.'
    },
    {
      img: '../../assets/person4.png',
      img_2: '../../assets/airplane.png',
      partner_name: 'Christopher Pierce',
      description: 'Star Wars fanatic. I have a persistent enthusiasm to create new things.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
