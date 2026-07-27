export const addNoteAction = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

export const editNoteAction = (editedNote) => {
  return {
    type: "EDIT_NOTE",
    payload: editedNote,
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};
