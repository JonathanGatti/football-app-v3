export const teamReducer = (state={}, action: any) => {
  switch(action.type){
    case 'FETCH_TEAMS':
      return{ ...state, teams: action.payload};
    case 'FETCH_TEAM':
      return {...state, [action.payload._id]: action.payload}
    default:
      return state;
  }

}