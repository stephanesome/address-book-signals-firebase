import {Component, effect, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressEntry} from "../address-entry";
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-address-list-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address-list-element.component.html',
  styleUrls: ['./address-list-element.component.css']
})
export class AddressListElementComponent {
  @Input()
  address: AddressEntry | undefined;
  selected = false;
  notificationService = inject(NotificationService);

  constructor() {
    effect(() => {
      this.selected = this.notificationService.selectedElement() === this.address;
    })
  }

  getFullName(): string {
    return `${this.address!.firstName}, ${this.address!.lastName}`;
  }
}
