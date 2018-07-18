import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	uri = 'http://localhost:3000';

	//result; 

  constructor(private http: HttpClient) { }

  getArticles(){
  	return this.http.get(`${this.uri}/articles`);
  }
}
