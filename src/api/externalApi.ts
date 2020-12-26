import axios from 'axios';
import {apiKey} from '../config';

const url = 'https://api-football-v1.p.rapidapi.com/v2/players/';

export async function getPlayer(name: string | Event){
  try {
    let res = await axios.get(`${url}search/${name}`, {
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

export async function getPlayerRatings (id: number) {
  try {
    let res = await axios.get(`${url}player/${id}`, {
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
        "useQueryString": true
      }
  })
    return res.data.api.players[0].rating
    }
  catch(e){
    console.log(e);
  }
}

