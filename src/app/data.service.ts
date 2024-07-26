import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private userData: any;
  apiEndpoint = 'http://localhost/dog_cat_api';

  // constructor(
  //   @Inject('API_ENDPOINT') private apiEndpoint: string,
  //   private http: HttpClient
  // ) {}

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  // Example method to use the API endpoint
  // fetchData() {
  //   return this.http.get(`${this.apiEndpoint}/data`);
  // }
}
