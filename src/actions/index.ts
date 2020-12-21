export const createPlayer = ( player: any) => {
  return {
    action: 'CREATE_PLAYER',
    payload: player
  }
}

export const deletePlayer = (id: string) => {
  return {
    action: 'DELETE_PLAYER',
    payload: id
  }
}