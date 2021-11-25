import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeService } from "./home.service";
import { DynamicControllerComponent } from "../core/dynamic-controller/dynamic-controller.component";
import { DynamicDirective } from "../core/dynamic-controller/dynamic.directive";
import { ShopComponent } from "../shop/shop.component";
import { DynamicService } from "../core/dynamic-controller/dynamic.service";

@NgModule({
  declarations: [
    HomeComponent,
    DynamicControllerComponent,
    DynamicDirective,
    ShopComponent
  ],
  imports: [CommonModule, SharedModule, MaterialModule, HomeRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HomeService,
    DynamicService
  ]
})
export class HomeModule { }
