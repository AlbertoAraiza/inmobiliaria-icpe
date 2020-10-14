import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { RealStateItem } from '../models/real-state-item';

@Injectable({
  providedIn: 'root'
})
export class RealStateItemsService {
  realStateList :AngularFireList<any>;
  selectedItem :RealStateItem = new RealStateItem;
  DBNAME = "realstate-item";

  constructor(private db :AngularFireDatabase) { }

  getRealState(){
    return this.realStateList = this.db.list(this.DBNAME);
  }

  addRealState(item :RealStateItem){
    this.realStateList.push({
      address1 : item.address1,
      address2 : item.address2,
      price : item.price
    });
  }

  updateRealState(item :RealStateItem){
    this.realStateList.update(item.$key, {
      address1 : item.address1,
      address2 : item.address2,
      price : item.price
    })
  }

  deleteRealState($key :string){
    this.realStateList.remove($key);
  }


}
