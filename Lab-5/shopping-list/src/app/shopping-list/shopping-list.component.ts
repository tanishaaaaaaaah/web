import { isNgTemplate } from '@angular/compiler';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']  
})
export class ShoppingListComponent{
  title = "Shopping List";
  list:any[]=[];
  id=0;
  addTask(item:string, quantity:string){
    this.list.push({id:this.list.length,name:item, quantity: quantity});
    console.warn(this.list);
  }
  removeTask(temp:number):void{
    console.warn(temp)
    this.list=this.list.filter((item:any) => item.id!==temp ? item:null);
  }
}
