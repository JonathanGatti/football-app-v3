import {getPlayerRatings} from './externalApi';
import {Player} from '../interfaces';
import teams from './teams';

interface Data {
  teamName: string;
  teamPlayers: Player[];
  teamModule: String[];
  userId: string;
  logo: string;
}


export const getData = async () => {
  try {
    const res = await teams.get('/api/teams');
    return res.data;
  }
  catch(e) {
    console.log(e)
  }
}
export const postData = (data: Data) => {
  teams.post('/api/teams',
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
      teams.post(`/api/players`,
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
    const res = await teams.get(`/api/players`);
    return res.data;
  }
  catch(e) {
    console.log(e);
  }
}

export const getPlayerById = async (id: number) => {
  const res = await teams.get(`/api/players/${id}`)
  return res;
}
export const deleteTeam = (id: string) => {
  teams.delete(`/api/teams/${id}`)
}
