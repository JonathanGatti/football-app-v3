import axios from 'axios';
import {Player} from '../interfaces';

interface Data {
  teamName: string;
  teamPlayers: Player[];
  teamModule: String[];
}

export const getData = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8080/api/teams');
    return res.data;
  }
  catch(e) {
    console.log(e)
  }
}
export const postData = (data: Data) => {
  axios.post('http://127.0.0.1:8080/api/teams',
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

export const postPlayer = (data: Player) => {
  axios.post('http://127.0.0.1:8080/api/players',
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
export const deleteTeam = (id: string) => {
  axios.delete(`http://127.0.0.1:8080/api/teams/${id}`)
}