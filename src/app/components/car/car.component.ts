import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireObject} from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
	item: object;
  id: string;

  constructor(private db: AngularFireDatabase,  private route: ActivatedRoute) {
    
    this.id = this.route.snapshot.params.id;   
    this.db.object(`cars/${this.id}`).valueChanges().subscribe((result) => {
      this.item = result
      });
    }

  ngOnInit() {
        
  }
}