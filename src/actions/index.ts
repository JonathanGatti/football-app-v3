import {SIGN_IN, SIGN_OUT, FETCH_TEAM, FETCH_TEAMS, CREATE_TEAM, DELETE_TEAM} from './types';
import {Team} from '../interfaces';
import axios from 'axios';

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
    const res = await axios.get('http://127.0.0.1:3002/api/teams');

    dispatch({ type:FETCH_TEAMS, payload: res.data });
  }
}

export const fetchTeam = (id: number) => {
  return async (dispatch: any) => {
    const res = await axios.get(`http://127.0.0.1:3002/api/teams/${id}`);

    dispatch({ type: FETCH_TEAM, payload: res.data });
  }
}


export const createTeam = (team: Team ) => {
  return async (dispatch: any, getState: any) => {
    const { userId } = getState().auth;
    const res = await axios.post('http://127.0.0.1:3002/api/teams/', team);

    dispatch({ type: CREATE_TEAM, payload: res.data })
  }
}
