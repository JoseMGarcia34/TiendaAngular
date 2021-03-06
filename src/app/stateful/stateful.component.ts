import { ConfirmComponent } from '../confirm/confirm.component';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';



@Component({
 selector: 'app-stateful',
 templateUrl: './stateful.component.html',
 styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit, OnDestroy {

 errorHttp: boolean;
 shopModel;
 boughtItems: Array<Product>;

 @ViewChild(ConfirmComponent, {static: false})
 confirmChild: ConfirmComponent;

 private shopSubscription: Subscription;


 constructor(private http: HttpClient) {
   this.boughtItems = [];
   this.shopModel = {shopItems: []};
 }

 ngOnInit(): void {
  this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
    (respuesta: Response) => { this.shopModel.shopItems = respuesta; },
    (respuesta: Response) => { this.errorHttp = true }
  );

  this.onGlobalKeyboard();
}

ngOnDestroy() {
  this.shopSubscription.unsubscribe();
  document.removeEventListener("keypress", this.onKeyboard);
}

 clickItem(curso) {
  this.boughtItems.push(curso);
 }

 cursoMatriculado(_event: Product) {
  this.clickItem(_event);
  this.onConfirm();
  this.confirmChild.isDisabled = false;

 }

 finalPrice() {
   if (this.boughtItems) {
     return this.boughtItems.reduce(
       (prev: number, item: Product) => prev + item.price, 0
     );
   }
 }

 onConfirm () {
   alert("Has añadido un nuevo curso");
 }

 confirmEnter () {
   alert("Has pulsado ENTER");
 }

 onKeyboard(_event) {
   if(_event.key === "Enter") {
     this.confirmEnter();
   }
 }

 onGlobalKeyboard() {
   document.addEventListener("keypress", (eventoGlobal) =>{
     this.onKeyboard(eventoGlobal);
   })
 }

}