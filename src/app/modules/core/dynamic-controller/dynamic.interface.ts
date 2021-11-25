import { ComponentRef, Type } from '@angular/core';

export interface DynamicInterface {
  data: any;
  componentHostRef: ComponentRef<any>;
  id: string;
}