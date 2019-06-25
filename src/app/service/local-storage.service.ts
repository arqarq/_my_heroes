import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'mojStorage';

@Injectable({
  // providedIn: CrisisModule
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  storeQueryParamsAndFragment(doZapisu = {a: 'aa', b: 'bb'}) {
    this.storage.set(STORAGE_KEY, doZapisu);
    console.log('LocalStorageService # storeQueryParamsAndFragment() # set(): ' + JSON.stringify(this.storage.get(STORAGE_KEY)));
  }

  getQueryParamsAndFragment(key: string = STORAGE_KEY): {[key: string]: string} | undefined {
    const newVar = this.storage.get(key);
    console.log('LocalStorageService # getQueryParamsAndFragment() # get(): ' + (JSON.stringify(newVar) || 'Storage pusty'));
    return newVar;
  }

  storeStringAtGivenKey(key: string, text?: string) {
    this.storage.set(key, text);
    console.log('LocalStorageService # storeStringAtGivenKey() # set(' + key + '): ' + this.storage.get(key));
  }

  getStringStoredAtGivenKey(key: string): string | undefined {
    const newVar = this.storage.get(key);
    console.log('LocalStorageService # getStringStoredAtGivenKey() # get(' + key + '): ' + (newVar || 'Storage pusty'));
    return newVar;
  }

  checkEntryAtGivenKey(key: string): boolean {
    const newVar = this.storage.has(key);
    console.log('LocalStorageService # checkEntryAtGivenKey() # has(' + key + '): ' + newVar);
    return newVar;
  }

  removeStorageAtGivenKey(key: string) {
    this.storage.remove(key);
    console.log('LocalStorageService # removeStorageAtGivenKey() # get(' + key + ')');
  }

  clearLocalStorage() {
    this.storage.clear();
  }
}
