export const selectPlayer = (player) => {
  return { type: "PLAYER_SELECTED", player };
};

export const deletePlayer = (player) => {
  return { type: "PLAYER_DELETED", player };
};
