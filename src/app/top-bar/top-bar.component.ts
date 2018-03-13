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
    serializedDate = new FormControl((new Date()).toISOString());
    constructor(public event: EventService) {
    }
    moveToMarker($event) {
        console.log($event.eventti.location.position.coordinates[1]);
        console.log($event.eventti.location.position.coordinates[0]);
    }
}
