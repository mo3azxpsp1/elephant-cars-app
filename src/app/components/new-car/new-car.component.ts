import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
	 itemsRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) { 
  	 this.itemsRef = db.list('cars');
  }

  addItem(newBrand: string, newCountry: string, newYear: string, newImage: string) {
    this.itemsRef.push({ brand: newBrand , country: newCountry, year: newYear, imageURl: newImage });
  }

  ngOnInit() {
  }

}
