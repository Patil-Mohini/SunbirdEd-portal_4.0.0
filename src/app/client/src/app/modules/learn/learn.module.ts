import { LearnRoutingModule } from './learn-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@sunbird/shared';
import { SuiModule } from 'ng2-semantic-ui/dist';
import { SlickModule } from 'ngx-slick';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnPageComponent, CoursePlayerComponent, CourseConsumptionHeaderComponent,
  CourseConsumptionPageComponent } from './components';
import { CourseConsumptionService } from './services';
import { CoreModule } from '@sunbird/core';
import { DiscussionModule } from '@sunbird/discussion';
import { BatchDetailsComponent } from './components/batch/batch-details/batch-details.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SuiModule,
    SlickModule,
    FormsModule,
    LearnRoutingModule,
    CoreModule,
    DiscussionModule
  ],
  providers: [CourseConsumptionService],
  declarations: [LearnPageComponent, CoursePlayerComponent, CourseConsumptionHeaderComponent,
    CourseConsumptionPageComponent, BatchDetailsComponent]
})
export class LearnModule { }
