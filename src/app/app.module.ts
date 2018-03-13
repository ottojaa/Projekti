import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {TopBarComponent} from './top-bar/top-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { MainComponent } from './main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DateService} from './services/date.service';
import {EventService} from './services/event.service';
import {MapComponent} from './map/map.component';
import {
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule, MatFormFieldModule,
    MatIconModule, MatListModule, MatMenuModule, MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule, MatTableModule, MatTabsModule,
    MatToolbarModule,
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { DuplicatesPipe } from './pipes/duplicates.pipe';
import { DatePipe } from '@angular/common';





@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MainComponent,
        MapComponent,
        DuplicatesPipe,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatToolbarModule,
        MatTabsModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatDialogModule,
        MatTableModule,
        MatExpansionModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        ScrollDispatchModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBmxXuhbCdCMj8A6lKbAx-o9X0n7ZAG5PI'
        })

    ],
    providers: [EventService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
