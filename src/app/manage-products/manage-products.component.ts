
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
 productLists : AngularFireList<any[]>;
 productListsCollection$: Observable<any[]>;
 product3object : AngularFireObject<{}>;
 product3Observable$:Observable<{}>;
 productObservable$:Observable<{}>;
 product3: any;
 

  constructor(private db: AngularFireDatabase) 
  {
    
    this.productLists = this.db.list('/Products');
    this.productListsCollection$ = this.productLists.valueChanges();
    this.productListsCollection$.subscribe((products)=>{
                                                     console.log(products);
                                                   });

    this.product3object = this.db.object('Products/3');
    this.product3Observable$ = this.product3object.valueChanges();
    this.productObservable$ = this.product3object.valueChanges();
    this.product3Observable$.subscribe(product3 => this.product3=product3);

  }

  ngOnInit() 
  {


  }


  updateProduct(product, index:Number)
  {
    console.log("I am in Update");
    
    let indx: Number = +index + 1;
     
     this.db.object('Products/'+indx).update( { Price :product.Price+'$'});
  }

  removeProduct(product, index:Number)
  {
    this.db.object('Products/-LkUvcHiurhjOM84ncox').remove();
   
  }

}
