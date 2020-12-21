import { combineReducers} from 'redux';
import { playersReducer } from './playersReducer';



export const reducers = combineReducers({
  players: playersReducer,
})