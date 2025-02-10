import {Component, Input} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bucket } from 'src/app/models/bucket';
import { RootReducerState } from 'src/app/reducers';

@Component({
  selector: 'bucket',
  template: `
    <div class="row">
      <h1>BucketComponent</h1>
      <div *ngFor="let groc of bucket$ | async">      
        {{groc.name}}  x  {{groc.quantity}} 
      </div>
    </div>
  `,
  styles: [``]
})

export class BucketComponent {

bucket$:Observable<Bucket[]>=this.store.select("myBucket");


 constructor(private store: Store<RootReducerState>) {
    }
 
}
