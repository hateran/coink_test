import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _httpClient: HttpClient) { }

  listCharacters(page: number, limit: number) {
    let headers = new HttpHeaders();

    return this._httpClient.get(`${environment.apiUrl}/character/?page=${page}&count=${limit}`, { headers: headers });
  }
}
