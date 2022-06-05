import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbiStorageService {
  static ABI_DETAILS = 'abidetails';

  private static connector: Promise<IDBDatabase>;
  private abiList: string[] = [];

  constructor() {
    if (!AbiStorageService.connector) {
      AbiStorageService.connector = this.openDbConnection();
    }
  }

  public upsertContract(abi: string, id: string) {
    if (!id || !abi) { return; }
    // TODO! handle error and success (err: revert todo , success: show toast)

    AbiStorageService.connector.then((db) => {
      const objectStore = db.transaction([AbiStorageService.ABI_DETAILS], 'readwrite').objectStore(AbiStorageService.ABI_DETAILS);
      // case for edit prop
      // const request = objectStore.get(todo.id);
      // request.onerror = console.error;
      // request.onsuccess = (event) => {

      //   const data = request.result;
      // };
      const requestUpdate = objectStore.put({ id, abi });
      requestUpdate.onerror = console.error;
      requestUpdate.onsuccess = console.log;
    });
  }
  public getAbiList() {
    this.loadAbiList();
  }

  private async loadAbiList(): Promise<void> {
    return AbiStorageService.connector.then((db) => {
      const transaction = db.transaction([AbiStorageService.ABI_DETAILS], 'readonly');
      const store = transaction.objectStore(AbiStorageService.ABI_DETAILS);

      // Get everything in the store
      const keyRange = IDBKeyRange.lowerBound(0);
      const cursorRequest = store.openCursor(keyRange);

      this.abiList = [];
      // This fires once per row in the store. So, for simplicity,
      // collect the data in an array (data), and pass it in the
      // callback in one go.
      cursorRequest.onsuccess = (e) => {
        const cursor = e.target['result'];
        // If there's data, add it to array
        if (cursor) {
          this.abiList.push(cursor.value.id);
          cursor.continue();
          // Reach the end of the data
        } else {
          console.log(this.abiList);
        }
      };
      cursorRequest.onerror = console.error;
    });
  }


  private async openDbConnection(): Promise<IDBDatabase> {
    return new Promise<IDBDatabase>((resolve, reject) => {

      const request = indexedDB.open('abiManager', 1);
      // indexedDB.deleteDatabase('todos');
      request.onerror = (event) => {
        console.log('error opening db', event);
        reject(event);
      };
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {

        const db = event.target['result'];
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
