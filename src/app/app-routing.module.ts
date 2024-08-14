import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PurposeComponent } from './purpose/purpose.component';

const routes: Routes = [
  {
    path: ``,
    component: HomeComponent

  },
  {
    path: `contact`,
    component: ContactComponent
  },
  {
    path: `purpose`,
    component: PurposeComponent
  },
  {
    path: `photos`,
    component: PhotosComponent
  },
  {
    path: `contact`,
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
