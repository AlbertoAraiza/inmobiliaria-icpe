import { Component, OnInit } from '@angular/core';
import { RealStateItem } from 'src/app/models/real-state-item';
import { RealStateItemsService } from 'src/app/services/real-state-items.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  realStateList : RealStateItem[];

  constructor(private realStateService :RealStateItemsService) { 
  }

  ngOnInit(): void {
    this.realStateService.getRealStates().snapshotChanges().subscribe(item =>{
      this.realStateList = []
      item.forEach(element =>{
        let jsonElement = element.payload.toJSON()
        jsonElement["$key"] = element.key
        this.realStateList.push(jsonElement as RealStateItem)
      })
    })
  }

}
