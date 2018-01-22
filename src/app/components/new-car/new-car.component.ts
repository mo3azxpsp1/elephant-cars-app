import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
	 itemsRef: AngularFireList<any>;
   countriesRef: AngularFireList<any>;
   countries: Observable<any[]>;

  constructor(db: AngularFireDatabase,public authService: AuthService) { 
  	 this.itemsRef = db.list('cars');
     this.countriesRef = db.list('countries');
     this.countries = this.countriesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addItem(newBrand: string, newCountry: string, newYear: string, newImage: string) {
    this.itemsRef.push({ brand: newBrand , country: newCountry, year: newYear, imageURl: newImage });
  }

  ngOnInit() {
  }

}
