import axios from 'axios';
import {Player} from '../interfaces';

interface Data {
  teamName: string;
  teamPlayers: Player[];
  teamModule: String[];
}


export const postData = (data: Data) => {
  axios.post('http://127.0.0.1:3002/api/teams',
    data,
     {
      headers: {
        'Content-Type': 'application/json',
        }
    })
    .catch(e => {
      console.log(e)
    })
}