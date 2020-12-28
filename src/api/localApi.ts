import axios from 'axios';
import {getPlayerRatings} from './externalApi';
import {Player} from '../interfaces';

interface Data {
  teamName: string;
  teamPlayers: Player[];
  teamModule: String[];
  userId: string;
  logo: string;
}

export const url = 'https://boiling-hollows-70973.herokuapp.com'

export const getData = async () => {
  try {
    const res = await axios.get(`${url}/api/teams`);
    return res.data;
  }
  catch(e) {
    console.log(e)
  }
}
export const postData = (data: Data) => {
  axios.post(`${url}/api/teams`,
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
  let newPlayer;
  const res = await getPlayers()
  const player = res.filter((player: Player) => (
    player.player_id === data.player_id
  ));
  newPlayer = player[0];
  if(newPlayer === undefined){
    const playerRating = await getPlayerRatings(data.player_id)
    newPlayer = {...data, rating: playerRating};
      axios.post(`${url}/api/players`,
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
  return newPlayer;
}

export const getPlayers = async () => {
  try {
    const res = await axios.get(`${url}/api/players`);
    return res.data;
  }
  catch(e) {
    console.log(e);
  }
}

export const getPlayerById = async (id: number) => {
  const res = await axios.get(`${url}/api/players/${id}`)
  return res;
}
export const deleteTeam = (id: string) => {
  axios.delete(`${url}/api/teams/${id}`)
}

const deletePlayers = async () => {
  const res = await getPlayers();
  res.map((player: Player) => (
    axios.delete(`${url}/api/players/${player._id}`)
  ))
}