import { Injectable } from '@angular/core';


@Injectable()
export class DateService {
  private currentDate = new Date();

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
}
