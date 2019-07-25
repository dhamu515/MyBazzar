import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form:FormGroup;
  productLists : AngularFireList<any[]>;
  productListsCollection$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) 
  {

    this.productLists = this.db.list('Products');
    this.productListsCollection$ = this.productLists.valueChanges();
    
   }

  ngOnInit() 
  {
  this.form = new FormGroup({
    'Name':new FormControl('',Validators.required),
    'Id':new FormControl('',Validators.required),
    'Price': new FormControl('',Validators.required),
    'Category': new FormControl('',Validators.required)
                          });

  }

  createProduct()
  {
    console.log("I am in Create Product function");
    console.log(this.form.value);
    this.productLists.push(this.form.value);
    
  }

}
