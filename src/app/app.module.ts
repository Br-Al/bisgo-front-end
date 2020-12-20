import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './views/layouts/nav/nav.component';
import { FooterComponent } from './views/layouts/footer/footer.component';
import { SliderCampaignComponent } from './views/layouts/slider-campaign/slider-campaign.component';
import { SliderProductComponent } from './views/layouts/slider-product/slider-product.component';
import { MainComponent } from './views/layouts/main/main.component';
import { ShopLeftSidebarComponent } from './views/layouts/shop-left-sidebar/shop-left-sidebar.component';
import { ShopComponent } from './views/layouts/shop/shop.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SliderCampaignComponent,
    SliderProductComponent,
    MainComponent,
    ShopLeftSidebarComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
