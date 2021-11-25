import { Injectable } from '@angular/core';
import { ShopComponent } from '../../shop/shop.component';
import { ItemType } from './item-type';

@Injectable()
export class DynamicService {

    getComponents(data: any): Array<ItemType> {
        return [
            new ItemType(
                ShopComponent,
                data,
                'shop-car'
            ),
        ];
    }

}