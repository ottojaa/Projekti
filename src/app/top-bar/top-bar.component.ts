import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {EventService} from '../services/event.service';
import {FormControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TopBarComponent {
    public lat: number;
    public lng: number;

    constructor(public event: EventService) {
    }

    moveToMarker($event) {
        console.log($event.eventti.location.position.coordinates[1]);
        console.log($event.eventti.location.position.coordinates[0]);
    }
    searchForm() {
        this.event.searchForm = true;
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
