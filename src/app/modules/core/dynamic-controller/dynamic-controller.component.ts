import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DynamicDirective } from './dynamic.directive';
import { DynamicInterface } from './dynamic.interface';
import { DynamicService } from './dynamic.service';
import { ItemType } from './item-type';

@Component({
    selector: 'app-dynamic-controller',
    template: `
        <ng-template dynamicHost></ng-template>
    `,
})
export class DynamicControllerComponent implements OnInit, OnDestroy {
    itemsType: ItemType[] = [];

    @Input() data: any;
    @Input() id!: string;

    @ViewChild(DynamicDirective, { static: true }) dynamicHost!: DynamicDirective;

    viewRef!: ComponentRef<any>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private dynamicService: DynamicService) { }

    ngOnInit(): void {
        console.log('i get on dynamic controller');
        this.load();
    }

    load(): void {
        this.itemsType = this.dynamicService.getComponents(this.data);
        this.loadComponent(this.id);
    }

    ngOnDestroy(): void {
    }

    loadComponent(componentId: string): void {
        console.log('i call here');
        
        this.killViewContainerInstances();
        const dialogItem = this.itemsType.find(d => d.id === componentId);

        if (dialogItem) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogItem.component);

            this.viewRef = this.dynamicHost.viewContainerRef.createComponent<DynamicInterface>(
                componentFactory
            );

            const literalView = {
                'view': this.viewRef.hostView
            }

            this.viewRef.instance.data = dialogItem.data;
            this.viewRef.instance.componentHostRef = literalView;
            this.viewRef.instance.id = JSON.parse(JSON.stringify(componentId));
        }


        this.viewRef.onDestroy(() => {
            // do something.
        })
    }

    killViewContainerInstances(): void {
        this.dynamicHost.viewContainerRef.clear();
    }
}

