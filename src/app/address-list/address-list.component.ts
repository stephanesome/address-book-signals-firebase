import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressEntry} from "./address-entry";
import {AddressListElementComponent} from "./address-list-element/address-list-element.component";
import {AddressViewComponent} from "./address-view/address-view.component";
import {NotificationService} from "./notification.service";

@Component({
  selector: 'app-address-list',
  standalone: true,
  imports: [CommonModule, AddressListElementComponent, AddressViewComponent],
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  providers: [NotificationService]
})
export class AddressListComponent {
  addresses: AddressEntry[] = [];
  currentAddress: AddressEntry | null = null;
  private notificationService = inject(NotificationService);

  select(address: AddressEntry): void {
    this.currentAddress = address;
    this.notificationService.selectionChanged(address);
  }

  addAddress(): void {
    const newAddress = new AddressEntry('New', 'Entry');
    this.addresses = [newAddress, ...this.addresses];
    this.select(newAddress);
  }

  deleteCurrent(): void {
    this.addresses = this.addresses.filter((address: AddressEntry) => address !== this.currentAddress);
    this.currentAddress = null;
  }
}
