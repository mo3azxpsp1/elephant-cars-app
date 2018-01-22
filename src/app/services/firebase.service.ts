import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Car } from "../interface/car";

@Injectable()
export class FirebaseService {
	carDetails: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  getCarDetails(id){
    this.carDetails = this.db.object('/cars/'+id) as AngularFireObject<Car>;
    return this.carDetails;     
}

}
