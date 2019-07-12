import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxAmapModule } from 'ngx-amap';

import { Tab2Page } from './tab2.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NgxAmapModule.forRoot({
            apiKey: '3f9327e9dd62e0358cba4992514bef7e'
        }),
        RouterModule.forChild([{path: '', component: Tab2Page}])
    ],
    declarations: [Tab2Page]
})
export class Tab2PageModule {
}
