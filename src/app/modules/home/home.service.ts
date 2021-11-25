import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../core/store/app-state";
import { APIURL } from "../core/tokens/app.tokens";

@Injectable({
  providedIn: "any",
})
export class HomeService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    @Inject(APIURL) public endpoint: String,
  ) {

  }

}
