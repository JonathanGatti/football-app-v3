import axios from 'axios';
import {apiKey} from '../config';

const url = 'https://api-football-v1.p.rapidapi.com/v2/players/search/';

export async function getPlayer(name: string | Event){
  try {
    let res = await axios.get(`${url}${name}`, {
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
        "useQueryString": true
      }
  })
    return res.data.api.players 
    }
  catch(e){
    console.log(e);
  }
}

