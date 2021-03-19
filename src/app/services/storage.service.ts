import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';


const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key:string , value :Object) {
    await Storage.set({
      key: 'user',
      value: JSON.stringify(value)
    });
  }

  async getObject(key:string):Promise<Object> {
    const ret = await Storage.get({ key: key });
    return JSON.parse(ret.value);
  }

  async setItem(key:string , value :string) {
    await Storage.set({
      key: key,
      value: value
    });
  }

  async getItem(key:string) :Promise<string>{
    const { value } = await Storage.get({ key: key });
    console.log('Got item: ', value);
    return value;
  }

  async removeItem() {
    await Storage.remove({ key: 'name' });
  }

  async keys() : Promise<string[]>{
    const { keys } = await Storage.keys();
    console.log('Got keys: ', keys);
    return  keys;
  }

  async clear() {
    await Storage.clear();
  }


}
