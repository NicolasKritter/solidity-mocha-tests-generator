import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbiStorageService {
  static ABI_LIST = 'abiList';
  static ABI_DETAILS = 'abidetails';
  private static db: Promise<IDBDatabase>;


  constructor() {
    if (!AbiStorageService.db) {
      AbiStorageService.db = this.openDbConnection();
    }
  }

  private async openDbConnection(): Promise<IDBDatabase> {
    return new Promise<IDBDatabase>((resolve, reject) => {

      const request = indexedDB.open('abiManager', 1);
      // indexedDB.deleteDatabase('todos');
      request.onerror = function (event) {
        console.log('error opening db', event);
        reject(event);
      };
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {

        const db = event.target['result'];
        if (!db.objectStoreNames.contains(AbiStorageService.ABI_LIST)) {
          db.createObjectStore(AbiStorageService.ABI_LIST, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(AbiStorageService.ABI_DETAILS)) {
          db.createObjectStore(AbiStorageService.ABI_DETAILS, { keyPath: 'id' });
        }
      };
      request.onsuccess = (event) => {
        resolve(event.target['result']);
      };

    });
  }
}
