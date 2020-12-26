export interface Player {
  _id: number;
  age: number;
  birth_country: string;
  birth_date: string;
  birth_place: string;
  firstname: string;
  height: string;
  lastname: string;
  nationality: string;
  number: null;
  player_id: number;
  player_name: string;
  position: string;
  weight: string;
}


export interface Team {
  teamName: string;
  teamPlayers: Player[];
  teamModule: string[];
  userId: string;
  logo: string;
  rating: number;
}