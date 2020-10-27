import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RealStateItem } from 'src/app/models/real-state-item';
import { RealStateItemsService } from 'src/app/services/real-state-items.service';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  service :RealStateItemsService;

  constructor(private realStateService :RealStateItemsService) {
    this.service = realStateService;
   }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
    this.service.addRealState(form.value);
    this.resetForm(form);
  }

  resetForm (form :NgForm){
    if(form != null){
      form.reset();
      this.service.selectedItem = new RealStateItem()
    }
  }

  closeModal(button){
    button.click()
    console.log(button)
  }

}
