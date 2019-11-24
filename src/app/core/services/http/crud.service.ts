import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService {
  url = 'http://localhost:8443/tent/';
  protected constructor(protected http: HttpClient) {}

  public async post(body, endpoint: string): Promise<number> {
    let response = null;
    try {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*'
      });
      const options = { headers };
      console.log(body);
      response = await this.http
        .post(`${this.url}${endpoint}`, body, options)
        .toPromise();
    } catch (error) {
      console.log('ERROR');
      response = this.errorHandler('POST', error, endpoint);
    }
    return response;
  }

  public errorHandler(
    method: string,
    error: HttpErrorResponse,
    endpoint: string
  ): Promise<never> {
    console.error(
      `Error occurred during ${method} ${this.url}/${endpoint}`,
      error,
    );
    return Promise.reject(error);
  }
}
