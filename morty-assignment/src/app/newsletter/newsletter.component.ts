import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  headline:string="Stay in Touch";
  newsletter_headline:string="Hi! What are you holiday interests?";
  cta_title:string="Search Partners";
  constructor() { }

  ngOnInit() {
  }

}
