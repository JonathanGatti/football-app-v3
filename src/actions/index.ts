import {SIGN_IN, SIGN_OUT} from './types';
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

    dispatch({ type: 'FETCH_TEAMS', payload: res.data });
  }
}

export const fetchTeam = (id: number) => {
  return async (dispatch: any) => {
    const res = await axios.get(`http://127.0.0.1:3002/api/teams/${id}`);

    dispatch({ type: 'FETCH_TEAM', payload: res.data });
  }
}