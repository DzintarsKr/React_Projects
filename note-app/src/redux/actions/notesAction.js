export const addNoteAction = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};
