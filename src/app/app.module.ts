import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatToolbarModule } from '@angular/material/toolbar';


import { NgxMatSelectSearchModule } from './mat-select-search/ngx-mat-select-search.module';

import { AppComponent } from './app.component';
import { SingleSelectionExampleComponent } from './examples/01-single-selection-example/single-selection-example.component';
import { MultipleSelectionExampleComponent } from './examples/02-multiple-selection-example/multiple-selection-example.component';
import { CustomClearIconExampleComponent } from './examples/03-custom-clear-icon-example/custom-clear-icon-example.component';
import { OptionGroupsExampleComponent } from './examples/04-option-groups-example/option-groups-example.component';
import { ServerSideSearchExampleComponent } from './examples/05-server-side-search-example/server-side-search-example.component';
import {
  MultipleSelectionSelectAllExampleComponent
} from './examples/06-multiple-selection-select-all-example/multiple-selection-select-all-example.component';
import { TooltipSelectAllExampleComponent } from './examples/07-tooltip-select-all-example/tooltip-select-all-example.component';
import { InfiniteScrollExampleComponent } from './examples/08-infinite-scroll-example/infinite-scroll-example.component';
import { CustomNoEntriesFoundExampleComponent } from './examples/09-custom-no-entries-found-example/custom-no-entries-found-example.component';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';


/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMatSelectSearchModule,
    MatSlideToggleModule
  ],
  declarations: [
    AppComponent,
    SingleSelectionExampleComponent,
    MultipleSelectionExampleComponent,
    CustomClearIconExampleComponent,
    CustomNoEntriesFoundExampleComponent,
    OptionGroupsExampleComponent,
    ServerSideSearchExampleComponent,
    MultipleSelectionSelectAllExampleComponent,
    TooltipSelectAllExampleComponent,
    InfiniteScrollExampleComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
