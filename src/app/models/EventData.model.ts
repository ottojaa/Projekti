import {Deserialize} from '../models/Deserialize.model';

export class EventData implements Deserialize<EventData>{
    id: string;
    lat: number;
    lng: number;
    short_description: string;
    info_url: string;
    name: string;

    deserialize(input: any): EventData {
        Object.assign(this, input);
        return this;
    }
}
