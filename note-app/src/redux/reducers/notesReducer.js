const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  if (action.type === "ADD_NOTE") {
    // state.notes.push(action.payload);
    return { ...state, notes: [...state.notes, action.payload] };
  }

  if (action.type === "DELETE_NOTE") {
     return state.filter((note) => note.id !== action.payload);
  }

  if (action.type === "EDIT_NOTE") {
     return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
  }

  return state;
};

export default notesReducer;
