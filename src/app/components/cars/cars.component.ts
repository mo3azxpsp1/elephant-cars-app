import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

	   itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase,public authService: AuthService) {
    this.itemsRef = db.list('cars');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }
  
  ngOnInit() {
  }

}
