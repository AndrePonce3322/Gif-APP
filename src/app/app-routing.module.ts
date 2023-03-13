import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GiftComponent } from './Gift/Gift.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';

const routes:Routes = [
  {path: '', component: GiftComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
