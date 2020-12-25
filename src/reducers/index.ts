import { combineReducers} from 'redux';
import  authReducer  from './authReducer';
import { teamReducer } from './teamReducer';

export const reducers = combineReducers({
  auth: authReducer,
  teams: teamReducer
})