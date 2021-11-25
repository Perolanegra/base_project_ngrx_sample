import { Type } from '@angular/core';

export class ItemType {
  constructor(public component: Type<any>, public data: any, public id: string) {}
}
