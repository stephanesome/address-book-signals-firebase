import {Component, input, OnInit, output} from '@angular/core';

import {AddressEntry} from "../address-entry";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-address-view',
  imports: [FormsModule],
  templateUrl: './address-view.component.html',
  standalone: true,
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {
  address = input.required<AddressEntry>();
  fireDelete = output<AddressEntry>();
  fireSave = output<AddressEntry>();
  edit: boolean | undefined;

  ngOnInit(): void {
    this.edit = true;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.address());
  }

  save(): void {
    this.fireSave.emit(this.address());
  }
}
