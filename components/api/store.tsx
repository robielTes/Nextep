import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { config } from '../../config';

async function save(key :string, value :any) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key :string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } 
}


export { save, getValueFor };