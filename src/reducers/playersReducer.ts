export const playersReducer = (state=[], action: any) => {
  switch(action.type){
    case 'CREATE_PLAYER':
      return [...state, action.payload];
    case 'DELETE_PLAYER':
      return state.filter(player => 
        player === action.payload
      )
    default:
      return state;
  }
}