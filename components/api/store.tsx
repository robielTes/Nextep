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
  } else {
    alert('No values stored under that key.');
  }
}


 async function getProfileData(token :any)
{
  const AuthStr = 'Bearer '.concat(token);
  let response = await axios.get(config.apiUrl+'profile', { headers: { Authorization: AuthStr } })
  .then(res =>res.data)
  .catch((err) => console.log('error ' + err))
  return(response)
} 

const topics = [
  {
    "id": 1,
    "created_at": "2022-06-18T08:26:20.000000Z",
    "updated_at": "2022-06-18T08:26:20.000000Z",
    "subject": "Voulez-vous plus de crème dans les millefeuilles ?"
  },
  {
    "id": 2,
    "created_at": "2022-06-18T08:26:20.000000Z",
    "updated_at": "2022-06-18T08:26:20.000000Z",
    "subject": "Acceptez-vous une augmentation de vos dividendes de 60% par année ?"
  },
  {
    "id": 3,
    "created_at": "2022-06-18T08:26:20.000000Z",
    "updated_at": "2022-06-18T08:26:20.000000Z",
    "subject": "Est-il temps de construire un nouveau bâtiment pour nos headquarters de Hong-Kong ?"
  },
  {
    "id": 4,
    "created_at": "2022-06-18T08:26:53.000000Z",
    "updated_at": "2022-06-18T08:26:53.000000Z",
    "subject": "Voulez-vous plus de crème dans les millefeuilles ?"
  },
  {
    "id": 5,
    "created_at": "2022-06-18T08:26:53.000000Z",
    "updated_at": "2022-06-18T08:26:53.000000Z",
    "subject": "Acceptez-vous une augmentation de vos dividendes de 60% par année ?"
  },
  {
    "id": 6,
    "created_at": "2022-06-18T08:26:53.000000Z",
    "updated_at": "2022-06-18T08:26:53.000000Z",
    "subject": "Est-il temps de construire un nouveau bâtiment pour nos headquarters de Hong-Kong ?"
  }
];


export { save, getValueFor,getProfileData,topics };