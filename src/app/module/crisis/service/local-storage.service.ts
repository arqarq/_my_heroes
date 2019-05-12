import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CrisisModule } from '../crisis.module';

const STORAGE_KEY = 'mojStorage';

@Injectable({
  providedIn: CrisisModule
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

  clearLocalStorage() {
    this.storage.clear();
  }
}
