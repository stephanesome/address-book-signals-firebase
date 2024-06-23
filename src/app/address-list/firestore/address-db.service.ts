import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AddressEntry} from "../address-entry";

@Injectable({
  providedIn: 'root'
})
export class AddressDbService {
  private firestore:  Firestore = inject(Firestore);

  getAddresses(): Observable<AddressEntry[]> {
    const addresses = collection(this.firestore, 'abooks', 'user', 'addresses');
    return collectionData(addresses, {idField: 'id'}) as Observable<AddressEntry[]>;
  }

  createAddress(address: AddressEntry) {
    const addresses = collection(this.firestore, 'abooks', 'user', 'addresses');
    delete address.id;
    // @ts-ignore
    return addDoc(addresses, {...address});
  }

  updateAddress(address: AddressEntry) {
    const addressId = address.id;
    delete address.id;
    const addresses = collection(this.firestore, 'abooks', 'user', 'addresses');
    const addressRef = doc(addresses, addressId!);
    // @ts-ignore
    return setDoc(addressRef, address);
  }

  deleteAddress(addressId: string): Promise<void> {
    const addresses = collection(this.firestore, 'abooks', 'user', 'addresses');
    const addressRef = doc(addresses, addressId);
    return deleteDoc(addressRef);
  }
}
