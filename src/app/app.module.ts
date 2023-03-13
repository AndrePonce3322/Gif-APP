import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { GiftComponent } from './Gift/Gift.component';
import { MenuBarComponent } from './MenuBar/menubar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftComponent,
    MenuBarComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
