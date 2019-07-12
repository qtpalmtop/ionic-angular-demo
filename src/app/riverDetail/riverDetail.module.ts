import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

import { RiverDetailPage } from './riverDetail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    RouterModule.forChild([{ path: '', component: RiverDetailPage }])
  ],
  declarations: [RiverDetailPage]
})
export class RiverDetailPageModule {}
