import { Component, ComponentRef, OnInit } from "@angular/core";
import { DynamicInterface } from "../core/dynamic-controller/dynamic.interface";

@Component({
  selector: "app-shop",
  templateUrl: './shop.component.html',
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent implements DynamicInterface, OnInit {
  
  data: any;
  componentHostRef!: ComponentRef<any>;
  id!: string;

  constructor() { }

  ngOnInit(): void {
  }
}

