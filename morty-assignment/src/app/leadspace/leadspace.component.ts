import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadspace',
  templateUrl: './leadspace.component.html',
  styleUrls: ['./leadspace.component.scss']
})
export class LeadspaceComponent implements OnInit {
  mobile_title:String="DREAMSHARE";
  headline:String="Share your holiday dream";
  subtitle:String="And find the perfect partner to fulfill it";
  cta_text:String="Find your holiday partner";
  constructor() { }

  ngOnInit() {
  }

}
