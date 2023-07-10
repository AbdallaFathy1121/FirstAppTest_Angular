import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('element') element!: { type: string; name: string; content: string; };
  queryParam!: {};
  fragment!: any;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.element = {
      type: "Normal",
      name: this.route.snapshot.params['name'],
      content: this.route.snapshot.params['content']
    };
    this.queryParam = this.route.snapshot.queryParams;
    this.fragment = this.route.snapshot.fragment;
  }
  

}
