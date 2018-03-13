import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule, MatFormFieldModule,
    MatIconModule, MatListModule, MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule, MatTableModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import { MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
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
    ],
    exports: [
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
    ]
})
export class AppMaterialModule {
}
