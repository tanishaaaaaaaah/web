import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  /*constructor() 
  {
    this.product_name = '';
    this.quantity = 0;
    this.list_display = '';
  }

  public product_name: string;
  public quantity: number;
  public list_display: string;*/

  /*constructor() 
  {
    this.new_item = '';
    this.index = 0;
    this.quantity = 0;
  }

  public items : string [] = [];
  public new_item: string;
  public index: number;
  public quantity: number;

  public addToList() {
    if (this.new_item == '') 
    {
      alert('Please Enter the Product and/or Quantity');
    } else {
      this.items.push(this.new_item,this.quantity.toString());
      //this.new_item = '';
    }
  }

  public deleteItem(index: number) {
    this.items.splice(index, 1);
  }*/

  new_item: string = '';
  quantity: number = 0;
  Display: boolean = false;

  shoppingList: Array<{ new_item: string; quantity: number }> = [];

  add() 
  {
    if (this.new_item == '' && this.quantity == 0) 
    {
      alert('Please enter product or/and quantity');
    } 
    else 
    {      
      this.shoppingList.push({ new_item: this.new_item, quantity: this.quantity});
    }
      console.log(this.shoppingList);
    }

    remove()
    {
      if (this.new_item == '') {
        alert('Please enter the product to be deleted');
      }
      else{
        let ProductName_temp = this.shoppingList.find(value => value.new_item == this.new_item);
        if (ProductName_temp?.new_item == this.new_item) {
        let removedProduct = this.shoppingList.splice(this.shoppingList.indexOf(ProductName_temp), 1);
        console.log(this.shoppingList);
        console.log(removedProduct);
        }
        else{
          alert('No such element found');
        }
      }
    }

    display()
    {
      this.Display = true;
    }

    clear()
    {
      this.Display = false;
      this.new_item = '';
      this.quantity = 0;
    }
  }
