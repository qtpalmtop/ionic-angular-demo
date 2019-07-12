import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { RiverService } from "../river.service";
import { RiverMapPoint } from "../riverMapPoint";

@Component({
    selector: "app-tab2",
    templateUrl: "tab2.page.html",
    styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
    WATER_TYPE_AMAP_MARKER_MODEL;
    riverMapPointInfo$: Observable <RiverMapPoint[]>;
    riverMapPointList;
    riverMapPointTotal;

    constructor(private riverService: RiverService) {}

    ngOnInit() {
        this.riverMapPointInfo$ = this.riverService.getMapPointList();

        this.WATER_TYPE_AMAP_MARKER_MODEL = {
            "1": "./../assets/img/1.png",
            "2": "./../assets/img/2.png",
            "3": "./../assets/img/3.png",
            "4": "./../assets/img/4.png",
            "5": "./../assets/img/5.png",
            "6": "./../assets/img/6.png"
        };

        this.riverMapPointInfo$.subscribe({
            next: res => {
                this.riverMapPointList = res[0].data || [];
                this.riverMapPointTotal = this.riverMapPointList.length || 0;
                console.log("Observer got a next value: " + JSON.stringify(this.riverMapPointList));
            },
            error: err => console.error("Observer got an error: " + err),
            complete: () => console.log("Observer got a complete notification"),
        });
    }
}
