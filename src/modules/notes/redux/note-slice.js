import { createSlice } from "@reduxjs/toolkit";

const noteSlice=createSlice({
    name:'noteslice',
    initialState:{'notes':[]},
    reducers:{//sync operation
        addNote(state,action){
            const noteObject=action.payload;
            console.log(action.payload)
            state.notes.push(noteObject)
            return state;
        },
        deleteNote(state,action){

        },
        updateNote(state,action){

        },
    },
    extraReducers:{//async operation

    }
});
// Export action creators individually
export const {addNote , deleteNote , updateNote}   = noteSlice.actions;
export default noteSlice.reducer;