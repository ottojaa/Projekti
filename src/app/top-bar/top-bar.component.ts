import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {EventService} from '../services/event.service';
import {FormControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TopBarComponent {
    public lat: number;
    public lng: number;
    serializedDate = new FormControl((new Date()).toISOString());
    serializedDate2 = new FormControl((new Date()).toISOString());
    constructor(public event: EventService) {
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
    refresh(): void {
        window.location.reload();
    }
}
