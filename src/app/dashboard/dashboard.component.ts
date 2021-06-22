import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../assets/products.json';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any = (data as any).default;
  dataSet : any =[];
  dataSetDuplicate : any = [];
  cartDelete : any = [];
  displayDelete: boolean = false;
  closeResult: any;
  searchText = '';
  randomID: number[] =[];
  newItem: any = '';
  flag: boolean = false;
  itemCount: number = 0;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
this.dataSet = this.products.products;
this.dataSetDuplicate = this.products.products;

  }

  RandomID(){
    for (let index = 7; index < 100; index++) {
          this.randomID.push(index);      
    }
    return this.randomID[0];
  }

  addToCart(product: any, val: any): void {

    if(product.target.checked == true){
      this.cartDelete.push(val)
      this.itemCount++;
    }
    else{
      const index = this.dataSet.indexOf(val.id);
        this.cartDelete.splice(index, 1);
        this.itemCount--;
    }
    if(this.cartDelete.length != 0){
      this.displayDelete = true;
    }
    else{
      this.displayDelete = false;

    }
}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
    });
  }
  GeneratePrice(): number{
    const id = Math.random();
    return id;
  }
  DeleteFiles(){

    this.dataSet = this.dataSet.filter( ( el: any ) => !this.cartDelete.includes( el ) );
    this.cartDelete = [];
    this.displayDelete = false;
    this.itemCount = 0;

  }
  AddItem(item: any){

    if(item){

    this.dataSet.forEach((element:any) => {
      if(element.title == item){
         this.flag = true;
        return;
      }

    });
    if(this.flag == false){
    const itemAdded =   {"description" : item,
    "id" : 'a'+this.RandomID(),
    "imageURL" : "../../assets/fallback.png",
    "price": this.GeneratePrice(),
    "strikePrice": this.GeneratePrice(),
    "title": item}

    this.dataSet.push(itemAdded);
    this.randomID.shift();
    this.newItem = '';
    }
    else{
      alert("Item Already Exists!!!");
      this.newItem = '';
      this.flag = false;
    }

  }
  else{
    alert("Enter an Item!")
  }
     }
}
