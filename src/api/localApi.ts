import axios from 'axios';
import {getPlayerRatings} from './externalApi';
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
  const res = await getPlayers()
  const player = res.filter((player: Player) => (
    player.player_id === data.player_id
  ));
  if(player[0] === undefined){
    const playerRating = await getPlayerRatings(data.player_id)
    const newPlayer = {...data, rating: playerRating};
      axios.post('http://127.0.0.1:8080/api/players',
      newPlayer,
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

export const getPlayerById = async (id: number) => {
  const res = await axios.get(`http://127.0.0.1:8080/api/players/${id}`)
  return res;
}
export const deleteTeam = (id: string) => {
  axios.delete(`http://127.0.0.1:8080/api/teams/${id}`)
}

const deletePlayers = async () => {
  const res = await getPlayers();
  res.map((player: Player) => (
    axios.delete(`http://127.0.0.1:8080/api/players/${player._id}`)
  ))
}