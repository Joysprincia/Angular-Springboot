import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormsComponent } from './forms/forms.component'
import { HttpClientModule } from '@angular/common/http';
import { PackageComponent } from './package/package.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AddpackageComponent } from './admin/addpackage/addpackage.component';
import { ViewpackageComponent } from './admin/viewpackage/viewpackage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddguideComponent } from './admin/addguide/addguide.component';
import { ViewguideComponent } from './admin/viewguide/viewguide.component';
import { GuideformComponent } from './guideform/guideform.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormloginComponent } from './formlogin/formlogin.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TravellerComponent } from './traveller/traveller.component';
import { SignupComponent } from './signup/signup.component';
import {MatSelectModule} from '@angular/material/select';
import { BookingformComponent } from './bookingform/bookingform.component';
import {MatRadioModule} from '@angular/material/radio';
import { SuccessComponent } from './success/success.component';
import { AssignguideComponent } from './admin/assignguide/assignguide.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { BookedlistComponent } from './admin/bookedlist/bookedlist.component';
import { AssignedbookingComponent } from './admin/assignedbooking/assignedbooking.component';
import { UpdateassignedComponent } from './updateassigned/updateassigned.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    HomeComponent,
    AboutUsComponent,
    TeamComponent,
    LoginformComponent,
    FormsComponent,
    PackageComponent,
    AddProductComponent,
    AdminComponent,
    GalleryComponent,
    AddpackageComponent,
    ViewpackageComponent,
    AddguideComponent,
    ViewguideComponent,
    GuideformComponent,
    FormloginComponent,
    TravellerComponent,
    SignupComponent,
    BookingformComponent,
    SuccessComponent,
    AssignguideComponent,
    UpdatebookingComponent,
    BookedlistComponent,
    AssignedbookingComponent,
    UpdateassignedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MDBBootstrapModule,
    MatSelectModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
