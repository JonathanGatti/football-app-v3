export const teamReducer = (state=[], action: any) => {
  switch(action.type){
    case 'FETCH_TEAMS':
      return [...state, action.payload];
    case 'FETCH_TEAM':
      return action.payload;
    default:
      return state;
  }

}