import {Component, input, OnInit, output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressEntry} from "../address-entry";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-address-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {
  // @Input() address!: AddressEntry;
  // @Output() fireDelete: EventEmitter<AddressEntry> = new EventEmitter();
  address = input.required<AddressEntry>();
  fireDelete = output<AddressEntry>();
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
}
