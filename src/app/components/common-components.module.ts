import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { IconsModule } from '../modules/icons/icons.module';
import { DirectivesModule } from '../modules/directives/directives.module';

// Components
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { ListenNowComponent } from './listen-now/listen-now.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { BgDecorationComponent } from './bg-decoration/bg-decoration.component';


@NgModule({
  declarations: [
    HeaderBannerComponent,
    BenefitsComponent,
    PartnersComponent,
    ListenNowComponent,
    BgDecorationComponent,
    NewsletterComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    DirectivesModule,
  ],
  exports: [
    HeaderBannerComponent,
    BenefitsComponent,
    PartnersComponent,
    ListenNowComponent,
    BgDecorationComponent,
    NewsletterComponent,
    FooterComponent,
    IconsModule,
    DirectivesModule,
  ]
})
export class CommonComponentsModule { }
