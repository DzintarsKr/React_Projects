const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  if (action.type === "ADD_NOTE") {
    // state.notes.push(action.payload);
    return { ...state, notes: [...state.notes, action.payload] };
  }

  // if (action.type === "DELETE_NOTE") {

  // }

  // if (action.type === "EDIT_NOTE") {

  // }

  return state;
};

export default notesReducer;
