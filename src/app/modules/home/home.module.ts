import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeService } from "./home.service";
import { APIURL } from "../core/tokens/app.tokens";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, MaterialModule, HomeRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HomeService,
    { provide: APIURL, useValue: '/pessoa' },
  ]
})
export class HomeModule {}
