import * as SecureStore from 'expo-secure-store';

async function save(key :string, value :any) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key :string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    alert('No values stored under that key.');
  }
}

export { save, getValueFor };