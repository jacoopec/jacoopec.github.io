import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Icons
import { NgIconsModule } from '@ng-icons/core';
import { matMenu } from '@ng-icons/material-icons/baseline';
import { matHeadsetOutline } from '@ng-icons/material-icons/outline';
import { heroUserCircleSolid } from '@ng-icons/heroicons/solid'
import { bootstrapInstagram } from '@ng-icons/bootstrap-icons'
import { bootstrapYoutube } from '@ng-icons/bootstrap-icons'
import { bootstrapTwitter } from '@ng-icons/bootstrap-icons'
import { bootstrapBagPlusFill } from '@ng-icons/bootstrap-icons'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ 
      matMenu,
      matHeadsetOutline, 
      heroUserCircleSolid,
      bootstrapInstagram,
      bootstrapYoutube,
      bootstrapTwitter,
      bootstrapBagPlusFill
    })
  ],
  exports: [
    NgIconsModule
  ]
})
export class IconsModule { }
