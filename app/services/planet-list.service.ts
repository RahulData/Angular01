import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetListService {
  planets:any;
  constructor(private http:HttpClient) { }

  getPlanets(pattern:string="*"):Observable<any> {
    let str:string = (pattern=="*") ? "" : "?search=" + pattern;
    console.log(str);
    console.log("Planet List service called");
    return this.http.get('http://swapi.co/api/planets/'+str);
    //return this.planets;
  }
  
}
