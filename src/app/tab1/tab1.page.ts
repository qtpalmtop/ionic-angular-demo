import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RiverService } from '../river.service';
import { RiverSection } from '../riverSection';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    riverSectionList$: Observable <RiverSection[]>;
    WATER_TYPE_LEVEL_MODEL;

    constructor(private riverService: RiverService) {

    }

    ngOnInit() {
        this.riverSectionList$ = this.riverService.getSectionList();

        this.WATER_TYPE_LEVEL_MODEL = {
            "I": "default",
            "II": "primary",
            "III": "success",
            "V": "warn",
            "IV": "danger",
        };

        console.log("this.riverSectionList", this.riverSectionList$);
    }

    didClickItem() {
        alert("clicked!");
    }

}
