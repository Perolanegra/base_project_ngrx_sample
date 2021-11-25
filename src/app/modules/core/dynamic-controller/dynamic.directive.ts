// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicHost]',
})
export class DynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}