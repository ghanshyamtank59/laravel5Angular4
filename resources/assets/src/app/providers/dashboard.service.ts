import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DashboardService {

    constructor(private _httpClient: HttpClient) { }

    listOfAllUsers() {
       return new Promise((resolve, reject) => {
            this._httpClient.get("user-list").subscribe(
                (res: any) => {
                    resolve(res);
                },
                error => {
                    reject(error);
                }
            )
        });
    }

}
