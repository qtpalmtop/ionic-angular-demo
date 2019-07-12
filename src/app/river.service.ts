import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { RiverSection } from "./riverSection";
import { RiverMapPoint } from "./riverMapPoint";

@Injectable({
    providedIn: "root"
})
export class RiverService {
    items = [];
    constructor(private http:HttpClient) {}

    /** GET heroes from the server */
    getSectionList(): Observable<RiverSection[]> {
        return this.http.get<RiverSection[]>("https://thsapp.com/Android/test/duanmian.json");
    }

    getMapPointList(): Observable<RiverMapPoint[]> {
        return this.http.get<RiverMapPoint[]>("https://thsapp.com/Android/test/map_point.json");
    }
}
