import {SIGN_IN, SIGN_OUT, FETCH_TEAM, FETCH_TEAMS, CREATE_TEAM, DELETE_TEAM, EDIT_TEAM} from './types';
import {Team, Player} from '../interfaces';
import teams from '../api/teams';

export const signIn = (userId: string | number) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}
export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}
export const fetchTeams = () => {
  return async (dispatch: any) => {
    const res = await teams.get(`/api/teams`);

    dispatch({ type:FETCH_TEAMS, payload: res.data });
  }
}

export const fetchTeam = (id: number) => {
  return async (dispatch: any) => {
    const res = await teams.get(`/api/teams/${id}`);

    dispatch({ type: FETCH_TEAM, payload: res.data });
  }
}


export const createTeam = (team: Team ) => {
  return async (dispatch: any) => {
    const res = await teams.post(`/api/teams`, team);

    dispatch({ type: CREATE_TEAM, payload: res.data })
    window.location.assign('/football-app-v3/#/list')
  }
}

export const editTeam = (team: Team, id:string) => {
  return async (dispatch: any) => {
    teams.put(`/api/teams/${id}`)

    dispatch({type: EDIT_TEAM, payload: team });
  }
}

export const deleteTeam = (id: string) => {
  return async (dispatch: any) => {
    await teams.delete(`/api/teams/${id}`)

    dispatch({ type: DELETE_TEAM, payload: id })
  }
}
