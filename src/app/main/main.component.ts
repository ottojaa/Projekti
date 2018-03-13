import {Component, OnInit} from '@angular/core';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: any;
  info_url: string;

  constructor(private event: EventService) {
  }
  ngOnInit() {
    this.event.getEvents().subscribe(result => {
      this.data = result['data'];
      console.log(result);
    });
  }
}
