import axios from 'axios'
import {config} from '../config'

async function getProfile(token :any)
{
  const AuthStr = 'Bearer '.concat(token);
  let response = await axios.get(config.apiUrl+'profile', { headers: { Authorization: AuthStr } })
  .then(res =>res.data)
  .catch((err) => console.log('error ' + err))
  return(response)
} 

async function getVoteTopics(token :any)
{
  const AuthStr = 'Bearer '.concat(token);
  let response = await axios.get(config.apiUrl+'voting_topics', { headers: { Authorization: AuthStr } })
  .then(res =>res.data)
  .catch((err) => console.log('error ' + err))
  return(response)
} 

export {getProfile, getVoteTopics};