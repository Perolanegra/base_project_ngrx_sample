import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppState } from "../core/store/app-state";
import { APIURL } from "../core/tokens/app.tokens";

@Injectable({
  providedIn: "any",
})
export class HomeService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    @Inject(APIURL) public endpointURL: String,
  ) {
  }

  getShopList(): Observable<any> {
    const url = `${environment.server}/${this.endpointURL}`;
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(url, { });
  }

}
