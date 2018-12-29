import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  headline:string="footer";
  constructor() { }
  links:Array<any> = [
    {
      "title":'about',
      "url":'about'
    },
    {
      "title":'contact',
      "url":'contact'
    },
    {
      "title":'press',
      "url":'press'
    },
    {
      "title":'blog',
      "url":'blog'
    },
    {
      "title":'help',
      "url":'help'
    },
    {
      "title":'terms and privacy',
      "url":'terms'
    },
  ]
  ngOnInit() {
  }

}
