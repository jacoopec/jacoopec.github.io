import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HendleMenuDirective } from '../../directives/hendleMenu/hendle-menu.directive';


@NgModule({
  declarations: [
    HendleMenuDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HendleMenuDirective,
  ]
})
export class DirectivesModule { }
