import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { StudentsListComponent } from './students-list/students-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AllStudentsDetailsComponent } from './all-students-details/all-students-details.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    StudentsListComponent,
    AllStudentsDetailsComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
