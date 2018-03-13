import {Component, OnInit} from '@angular/core';
import {MouseEvent} from '@agm/core';
import {EventData} from '../models/EventData.model';
import {EventService} from '../services/event.service';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    public lat: number;
    public lng: number;
    public paikkaHaettu = false;
    zoom = 15;
    constructor(public event: EventService) {
    }
    ngOnInit() {
        this.event.getPosition().subscribe( res => {
            console.log(res);
            this.lat = this.event.lat;
            this.lng = this.event.lng;
            this.event.getEvents().subscribe( event => {
                console.log(event);
                this.event.eventit = event['data'];
                this.event.ladattu = true;
            });
        });
    }
}
