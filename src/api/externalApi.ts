import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_EXTERNAL_API_BASE_URL;

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

