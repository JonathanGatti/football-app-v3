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

export const postPlayer = async (data: Player) => {
  const res = await getPlayerById(data.player_id);
  if(res === undefined){
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
  return null;
}

export const getPlayers = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8080/api/players');
    return res.data;
  }
  catch(e) {
    console.log(e);
  }
}

export const getPlayerById = (id: number) => {
  const res = axios.get(`http://127.0.0.1:8080/api/players/${id}`)
  return res;
}
export const deleteTeam = (id: string) => {
  axios.delete(`http://127.0.0.1:8080/api/teams/${id}`)
}