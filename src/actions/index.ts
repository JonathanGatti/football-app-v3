import {SIGN_IN, SIGN_OUT, FETCH_TEAM, FETCH_TEAMS, CREATE_TEAM, DELETE_TEAM} from './types';
import {Team} from '../interfaces';
import axios from 'axios';
import history from '../history';
import {url} from '../api/localApi';

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
    const res = await axios.get(`${url}/api/teams`);

    dispatch({ type:FETCH_TEAMS, payload: res.data });
  }
}

export const fetchTeam = (id: number) => {
  return async (dispatch: any) => {
    const res = await axios.get(`${url}/api/teams/${id}`);

    dispatch({ type: FETCH_TEAM, payload: res.data });
  }
}


export const createTeam = (team: Team ) => {
  return async (dispatch: any) => {
    const res = await axios.post(`${url}/api/teams`, team);

    dispatch({ type: CREATE_TEAM, payload: res.data })
    window.location.assign('/list')
  }
}

export const deleteTeam = (id: string) => {
  return async (dispatch: any) => {
    axios.delete(`${url}/api/teams/${id}`)

    dispatch({ type: DELETE_TEAM, payload: id })
    history.push('/');
  }
}
