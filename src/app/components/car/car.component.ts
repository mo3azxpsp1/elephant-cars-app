import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireObject} from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-car',
  // templateUrl: './car.component.html',
  template: `
  <h1>{{ result.brand }}</h1>
  `,
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
	// item: AngularFireObject<any>;
  
    id: string;
     brand;
    country;
    imageUrl;
    year;


  constructor(private db: AngularFireDatabase,  private route: ActivatedRoute) {
this.id = this.route.snapshot.params.id;
        console.log(this.id);
    this.db.object(`cars/${this.id}`).valueChanges().subscribe((result) => console.log(result))
    
   
    // this.id = this.route.snapshot.params.id;
  // this.item = this.db.object('cars'+'/'+this.id).valueChanges(); 
  //   console.log(this.item);
    }

//    getCarDetails(id){
//      var item = this.db.object('/cars/'+id).valueChanges();
// return item; 
     
// }

// getCar(carKey: string) {
//     this.item = this.db.object(`cars/${carKey}`)
// }

  ngOnInit() {
        
    // this.getCarDetails(this.id).subscribe(item =>
    //     this.brand = item.brand,
    //     this.country = item.country


 
   //  this.id = this.route.snapshot.queryParams['id'];
  	// this.getCarDetails(this.id);
   //  };
  }
}