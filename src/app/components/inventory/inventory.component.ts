import { Component, OnInit } from '@angular/core';
import { RealStateItemsService } from 'src/app/services/real-state-items.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private realStateService :RealStateItemsService) { 
  }

  ngOnInit(): void {
  }

}
