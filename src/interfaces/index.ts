import PlayerInfo from "../components/PlayerInfo"

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
  rating: number;
}


export interface Team {
  teamName: string;
  teamPlayers: Player[];
  teamModule: string[];
  userId: string;
  logo: string;
  rating: number;
  _id?: string | undefined;
}

export interface GoogleAuthProps {
  isSignedIn: boolean | null;
  signIn: Function;
  signOut: Function;
}

export interface PlayerProps {
  player: Player;
}

export interface PlayerInfoProps {
  team?: any;
  player: Player;
  editTeam?: (team:Team) => void;

}

export interface SearchPlayerFormProps {
  team: Team;
  setTeam: Function;
  setRating: Function;
  index: number;
  editTeam?: (id: number, player: any) => void;
}

export interface SearchResultListProps {
  player: Player;
  onClick: Function;
  onOpen: Function;
  index: number;
}

export interface TeamFormProps {
  onSelectChange: (e: any) => void;
  onNameChange: (e: any) => void;
  onLogoChange: (e: any) => void;
  onClick: () => void;
  team: Team;
}

export interface CreateTeamProps {
  createTeam: (data: Team) => void;
  auth: { userId: string; isSigendIn: boolean };
}

export interface ShowTeamProps {
  match: any;
  fetchTeam: Function;
  team: Team;
  auth: { isSignedIn: boolean; userId: string };
}

export interface TeamsListProps {
  teams: any;
  auth: { isSignedIn: boolean; userId: string };
  fetchTeams: Function;
  deleteTeam: Function;
  addToFightBtn?: any;
}
