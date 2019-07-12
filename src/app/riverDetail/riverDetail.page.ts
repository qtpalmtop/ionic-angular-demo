import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { RiverService } from "../river.service";
import { RiverSection } from "../riverSection";

@Component({
    selector: "app-river-detail",
    templateUrl: "riverDetail.page.html",
    styleUrls: ["riverDetail.page.scss"]
})
export class RiverDetailPage implements OnInit {
    riverSectionList$: Observable <RiverSection[]>;
    WATER_TYPE_LEVEL_MODEL;
    riverDetail;
    waterQualityList;
    riverId;
    opiId;
    waterLevel;
    waterLevelOptions;
    chartOption;

    constructor(private route: ActivatedRoute, private riverService: RiverService) {

    }

    ngOnInit() {

        this.waterLevel = "";

        this.waterLevelOptions = [
            {
                name: "I类",
                value: "I"
            },
            {
                name: "II类",
                value: "II"
            },
            {
                name: "III类",
                value: "III"
            },
            {
                name: "IV类",
                value: "IV"
            },
            {
                name: "V类",
                value: "V"
            },
            {
                name: "劣V类",
                value: "VI"
            }
        ];

        this.chartOption = {
            color: ["#18d472", "#e81414"],

            legend: {
                top: "bottom",
                data: [
                    {name: "达标", icon: "circle"},
                    {name: "不达标", icon: "circle"},
                    {name: "目标水质", icon: "rect"},]
            },
            grid: {
                left: 50,
                top: 15
            },
            xAxis: {
                type: "category",
                data: ["4月8日 04:00", "4月8日 08:00", "4月8日 12:00"],
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 6,
                axisLabel: {
                    formatter: function(index){
                        let arr = ["", "I类", "II类", "III类", "IV类", "V类", "劣V类"]
                        return arr[index] ? arr[index] : ""
                    }
                }

            },
            series: [
                {
                    type: "bar",
                    name : "达标",
                    data: [2, 1, 3],
                    itemStyle: {
                        emphasis: {
                            barBorderRadius: 8
                        },
                        normal: {
                            barBorderRadius: 8
                        }
                    }
                },
                {
                    type: "bar",
                    name : "不达标",
                    data: [4, 4, 5],
                    itemStyle: {
                        emphasis: {
                            barBorderRadius: 8
                        },
                        normal: {
                            barBorderRadius: 8
                        }
                    }
                },
                {
                    type: "bar",
                    name : "不达标",
                    data: [5, 4, 4],
                    itemStyle: {
                        emphasis: {
                            barBorderRadius: 8
                        },
                        normal: {
                            barBorderRadius: 8
                        }
                    }
                }
            ]
        };

        this.WATER_TYPE_LEVEL_MODEL = {
            "I": "default",
            "II": "primary",
            "III": "success",
            "IV": "warn",
            "V": "danger",
        };

        this.waterQualityList = [
            {
                date : "00:00",
                W21003 : "31",
                W01001 : "34",
                W01019 : "11",
                W21011 : "14",
                WATER_TYPE_JB : "II"
            },
            {
                date : "04:00",
                W21003 : "32",
                W01001 : "32",
                W01019 : "10",
                W21011 : "13",
                WATER_TYPE_JB : "I"
            },
            {
                date : "08:00",
                W21003 : "34",
                W01001 : "36",
                W01019 : "13",
                W21011 : "15",
                WATER_TYPE_JB : "III"
            },
            {
                date : "12:00",
                W21003 : "31",
                W01001 : "34",
                W01019 : "11",
                W21011 : "16",
                WATER_TYPE_JB : "V"
            }
        ];

        this.riverSectionList$ = this.riverService.getSectionList();

        this.route.paramMap.subscribe(params => {
            this.riverId = +params.get("riverId");
            this.opiId = +params.get("opiId");

            console.log("parmas", params);
        });

        this.riverSectionList$.subscribe({
                next: res => {
                    this.renderRiverDetail(res, this.riverId, this.opiId);
                    console.log("Observer got a next value: " + JSON.stringify(res));
                },
                error: err => console.error("Observer got an error: " + err),
                complete: () => console.log("Observer got a complete notification"),
            });

    }

    didSelectChange(item) {
        console.log("this.currentYear", this.waterLevel, item);
    }

    renderRiverDetail(res: object = [], riverId: number = 0, opiId: number = 0) {
        this.riverDetail = res[riverId].opi[opiId];
        console.log("riverDetail", this.riverDetail);
    }

}
