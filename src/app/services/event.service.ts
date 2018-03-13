import {Injectable} from '@angular/core';
import {DateService} from '../services/date.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventData} from '../models/EventData.model';
import {Deserialize} from '../models/Deserialize.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
    constructor(private http: HttpClient) {
    }
    private currentDate = new Date();
    apiUrl = 'https://api.hel.fi/linkedevents/v1/event/?include=location&start=today&bbox=';
    lng: number;
    lat: number;
    paikkaHaettu = false;
    x = '';
    eventit = new Array();
    getCurrentDate(): string {
        let day: any = this.currentDate.getDate();
        let month: any = this.currentDate.getMonth() + 1;
        let year: any = this.currentDate.getFullYear();
        let dateInApiFormat: string;

        if ( day < 10 ) {
            day = '0' + day.toString();
        }
        if (month < 10) {
            month = '0' + month.toString();
        }
        dateInApiFormat = day + '-' + month + '-' + year.toString();
        console.log(dateInApiFormat);
        this.currentDate.setDate( this.currentDate.getDate() + 7 );
        return dateInApiFormat;
    }
    setToMarker() {

    }

    getEvents() {
        return this.http.get<EventData>(this.apiUrl + (this.lng - 0.035) + ','
            + (this.lat - 0.035) + ',' + (this.lng + 0.035) + ',' + (this.lat + 0.035));
    }
    getPosition(): Observable<boolean> {
        return new Observable<boolean>(observer => {
            if (navigator) {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.lng = +pos.coords.longitude;
                    this.lat = +pos.coords.latitude;
                    this.paikkaHaettu = true;
                    observer.next(true);
                    console.log(this.lat, this.lng);
                });
            } else {
                this.x = 'Geolocation is not supported by this browser.';
                console.log('no geolocation');
                observer.next(false);
            }
        });
    }

    /*const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http.get<EventData>(this.apiUrl, body, headers); */
}


