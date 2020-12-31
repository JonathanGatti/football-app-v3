import {useState} from 'react';
import { Team } from '../interfaces';
import { defaultTeam } from '../utils/defaultTeam';

export function useTeam(newTeam: Team){
  const [team, setTeam] = useState(defaultTeam);

  setTeam({...newTeam})

  return [team, setTeam]
}