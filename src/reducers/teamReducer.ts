import { FETCH_TEAM, FETCH_TEAMS, CREATE_TEAM, DELETE_TEAM} from '../actions/types';
import _ from 'lodash';

export const teamReducer = (state={}, action: any) => {
  switch(action.type){
    case FETCH_TEAMS:
      return{ ...state, teams: action.payload};
    case FETCH_TEAM:
      return {...state, [action.payload._id]: action.payload};
    case CREATE_TEAM:
      return {...state, [action.payload._id]: action.payload};
    case DELETE_TEAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }

}