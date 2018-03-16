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
    apiUrl = 'https://api.hel.fi/linkedevents/v1/event/?include=location,keywords&start=today&bbox=';
    apiUrlSearch = 'https://api.hel.fi/linkedevents/v1/event/?include=location,keywords';
    lng: number;
    lat: number;
    paikkaHaettu = false;
    x = '';
    eventit = new Array();
    searchForm = false;
    ladattu = false;
    public query: any;
    public startDate: string;
    public endDate: string;
    public conditionalText = '&text=';
    public startText = '&start=';
    public endText = '&end=';

    getEvents() {
        if (!this.searchForm) {
            return this.http.get<EventData>(this.apiUrl + (this.lng - 0.035).toFixed(3) + ','
                + (this.lat - 0.095).toFixed(3) + ',' + (this.lng + 0.035).toFixed(3) + ',' + (this.lat + 0.035).toFixed(3));
        } else {
            if (this.query == null) {
                this.conditionalText = '';
                this.query = '';
            }if (this.startDate == null) {
                this.startText = '';
                this.startDate = '';
            }if (this.endDate == null) {
                this.endDate = '';
                this.endText = '';
            }
            return this.http.get<EventData>(this.apiUrlSearch + this.conditionalText +
                this.query + this.startText + this.startDate + this.endText + this.endDate);
        }
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


