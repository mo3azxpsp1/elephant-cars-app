import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireObject} from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  id: any;
  brand;
  year;
  country;
  imageURL;

  constructor(private firebaseService: FirebaseService, private db: AngularFireDatabase,  private route: ActivatedRoute, public authService: AuthService) {

    this.id = this.route.snapshot.params.id;   
    this.firebaseService.getCarDetails(this.id).valueChanges().subscribe(car => {
      this.brand = car.brand;
      this.year = car.year;
      this.country = car.country;
      this.imageURL = car.imageURL;
      });
    }

  ngOnInit() {
        
  }
}