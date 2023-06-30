import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  serverName = '';
  serverContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverName, 
      serverContent: this.serverContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.serverName, 
      serverContent: this.serverContent
    });
  }

}
