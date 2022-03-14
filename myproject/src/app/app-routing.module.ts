import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddguideComponent } from './admin/addguide/addguide.component';
import { AddpackageComponent } from './admin/addpackage/addpackage.component';
import { AdminComponent } from './admin/admin.component';
import { AssignedbookingComponent } from './admin/assignedbooking/assignedbooking.component';
import { AssignguideComponent } from './admin/assignguide/assignguide.component';
import { BookedlistComponent } from './admin/bookedlist/bookedlist.component';
import { ViewguideComponent } from './admin/viewguide/viewguide.component';
import { ViewpackageComponent } from './admin/viewpackage/viewpackage.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormsComponent } from './forms/forms.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GuideformComponent } from './guideform/guideform.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PackageComponent } from './package/package.component';
import { PlacesComponent } from './places/places.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import { TeamComponent } from './team/team.component';
import { TravellerComponent } from './traveller/traveller.component';
import { UpdateassignedComponent } from './updateassigned/updateassigned.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';



const routes: Routes = [
  {path:"", pathMatch:"full",redirectTo:"/home"},
  {path:"home","component":HomeComponent},
  {path:"places","component":PlacesComponent},
  {path:"about-us","component":AboutUsComponent},
  {path:"team","component":TeamComponent},
  {path:"loginform","component":LoginformComponent},
  {path:"forms/:id","component":FormsComponent},
  {path:"guideform/:id","component":GuideformComponent},
  {path:"package","component":PackageComponent},
  {path:"gallery","component":GalleryComponent},
  {path:"formlogin","component":FormloginComponent},
  {path:"signup","component":SignupComponent},
  {path:"add-product","component":AddProductComponent},
  {path:"bookingform","component":BookingformComponent},
  {path:"updateassigned/:g_id","component":UpdateassignedComponent},
  {path:"success","component":SuccessComponent},
  {path:"updatebooking/:book_id","component":UpdatebookingComponent},
  {path:"traveller","component":TravellerComponent},
  {path:"admin","component":AdminComponent,children:[
    {path:"addpackage","component":AddpackageComponent},
    {path:"addguide","component":AddguideComponent},
    {path:"viewguide","component":ViewguideComponent},
    {path:"viewpackage","component":ViewpackageComponent},
    {path:"assignguide","component":AssignguideComponent},
    {path:"bookedlist","component":BookedlistComponent},
    {path:"assignedbooking","component":AssignedbookingComponent}
  ]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
