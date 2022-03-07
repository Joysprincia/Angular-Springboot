import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddguideComponent } from './admin/addguide/addguide.component';
import { AddpackageComponent } from './admin/addpackage/addpackage.component';
import { AdminComponent } from './admin/admin.component';
import { ViewguideComponent } from './admin/viewguide/viewguide.component';
import { UpdateformComponent } from './admin/viewpackage/updateform/updateform.component';
import { ViewpackageComponent } from './admin/viewpackage/viewpackage.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FormsComponent } from './forms/forms.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GuideformComponent } from './guideform/guideform.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PackageComponent } from './package/package.component';
import { PlacesComponent } from './places/places.component';
import { TeamComponent } from './team/team.component';


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
  {path:"add-product","component":AddProductComponent},
  {path:"admin","component":AdminComponent,children:[
    {path:"addpackage","component":AddpackageComponent},
    {path:"addguide","component":AddguideComponent},
    {path:"viewguide","component":ViewguideComponent},
    {path:"viewpackage","component":ViewpackageComponent,children:[
      {path:"updateform/:id","component":UpdateformComponent}
    ]}
    
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
