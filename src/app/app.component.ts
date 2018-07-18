
import { Component } from '@angular/core';
//import {newComponent} from './new.component'
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';


  constructor(private dataService: DataService){
  	this.dataService.getArticles().subscribe((articles) => {
  		console.log(articles);
  	});
  }
  
}
