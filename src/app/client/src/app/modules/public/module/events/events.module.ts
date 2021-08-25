import { EventRoutingModule } from './events-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '@sunbird/telemetry';
import { CoreModule } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { NgInviewModule } from 'angular-inport';
import {SharedFeatureModule} from '@sunbird/shared-feature';
import { PublicCourseConsumptionPageComponent,
  ExploreCourseComponent, PublicCoursePlayerComponent, PublicBatchDetailsComponent } from '../course/components';
  import {EventViewTypeComponent} from './components';
import { SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
  SuiRatingModule, SuiCollapseModule } from 'ng2-semantic-ui';
import { CourseConsumptionService, CourseBatchService, CourseProgressService } from '@sunbird/learn';
import { FormsModule } from '@angular/forms';
import { PlayerHelperModule } from '@sunbird/player-helper';
import { ContentSearchModule } from '@sunbird/content-search';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption-v8';
import { EventLibraryModule } from '@tekdi/ngtek-event-library';
import  * as configData from '../../../../../environments/urlConfig';


@NgModule({
  imports: [
    CommonModule,
    TelemetryModule,
    CoreModule,
    SharedModule,
    NgInviewModule,
    EventRoutingModule,
    SharedFeatureModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule,
    FormsModule,
    PlayerHelperModule,
    ContentSearchModule,
    CommonConsumptionModule,
    EventLibraryModule.forChild(configData),
  ],
  providers: [CourseConsumptionService, CourseBatchService, CourseProgressService],
  declarations: [ PublicCourseConsumptionPageComponent, ExploreCourseComponent,
    PublicCoursePlayerComponent, PublicBatchDetailsComponent, EventViewTypeComponent ]
})
export class EventsModule { }
