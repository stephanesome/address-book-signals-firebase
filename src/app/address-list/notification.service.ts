import {Injectable, signal} from '@angular/core';
import {AddressEntry} from "./address-entry";

@Injectable()
export class NotificationService {
  selectedElement = signal<AddressEntry | null>(null);
  constructor() { }

  public selectionChanged(address: AddressEntry): void {
    this.selectedElement.set(address);
  }
}
