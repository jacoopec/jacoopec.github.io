import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHendleMenu]'
})
export class HendleMenuDirective implements OnChanges {
  @Input() valueMenu!: boolean;
  @HostBinding('style') widthNav!: string

  ngOnChanges(changes: SimpleChanges) {
    if(changes['valueMenu']) {
      this.widthNav = this.valueMenu ? 'display: flex;' : 'display: none;'
    }
  }
}
