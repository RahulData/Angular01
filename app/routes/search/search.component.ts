import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PlanetListService } from '../../services/planet-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr:string;
  planets:any[];
  subscription;

  constructor(private route:ActivatedRoute, private search:PlanetListService) { 
  }

  ngOnInit() {
      this.subscription = this.search.getPlanets("*").subscribe(
        data=>this.planets=data.results,
        ()=>alert("service not working...!!!")
      );
  }

  changeText() {
      let pattern:string = this.searchStr;
      if(this.searchStr==undefined || this.searchStr.length==0)
          pattern="*";
      this.subscription.unsubscribe();
      this.subscription= this.search.getPlanets(pattern).subscribe(
        (data) => {
          this.planets=data.results;
          console.log(data.results);
        },
        ()=>alert("Service not working...!!!")
      )
  }
  
  calcHeight(population:string):string {
    population = (population=="unknown") ? '10000' : population;
    return "'"+Math.round(Math.pow(Math.log10(Number(population)),2)).toString()+'px'+"'";
    // return '100px';
  }

  setMyStyles(population:string):Object {
    let styles = {
      'border':'solid 2px green','width': this.calcHeight(population),'height':'60px'
    };
    console.log(styles);
    return styles;
  }
}
