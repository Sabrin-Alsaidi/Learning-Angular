import { Component } from '@angular/core';
import { User } from '../../DataStore/Models/user';
import { CommonModule } from '@angular/common';
import { Prodect } from '../../DataStore/Models/prodect';
import { Category } from '../../DataStore/Models/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  // UserValue : User ;
  prodectList:Prodect[];
  catg : Category[];
  totalPrice:number=0;
  SelectedCategory:number = 0; 

  constructor(){
    // this.UserValue = new User("yousif Mohamed" , 26 , "Male" , "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat exercitationem maiores qui iure adipisci enim rerum saepe fuga laudantium.",['react' , "angular" , ".Net" , "php" ,"python"] ) ;
    this.totalPrice=0;
    this.prodectList=[
      {id : 1 , name: "Tinnes Ball",price:10,quantity:10,imageUrl:"https://fakeimg.pl/300/" ,catId: 1},
      {id : 2 , name: "BBQ ",price:30,quantity:3,imageUrl:"https://fakeimg.pl/300/" ,catId: 2},
      {id : 3 , name: "Camping tools",price:35,quantity:5,imageUrl:"https://fakeimg.pl/300/" ,catId: 3},
      {id : 4 , name: "FootBall",price:11,quantity:10,imageUrl:"https://fakeimg.pl/300/" ,catId: 1},
    ]

    this.catg=[
      {id :1 , name : "Sport"},
      {id :2 , name : "Summer"},
      {id :3 , name : "Camping"}


    ]
  }

  TotalPrice(Price: number , quantity:string){
    let qrt : number = parseInt(quantity);
    let result=Price*qrt;
    this.totalPrice=result+this.totalPrice;
  }
  
  ChangeCat(){
    this.SelectedCategory=1;
  }

}
