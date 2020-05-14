import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule,MatTabsModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ExpenseComponent } from './expense/expense.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';


// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MdChipsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ExpenseComponent,
    CalendarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressBarModule,
  MatTabsModule,
  MatSelectModule,
  FlexLayoutModule,
  // MatLabel,
  
  // MatCalendar,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule, 
  // MatMomentDateModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
