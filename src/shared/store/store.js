import { configureStore } from '@reduxjs/toolkit'
import noteSlice from '../../modules/notes/redux/note-slice';

const store=configureStore({
      reducer :{
        'noteSlice':noteSlice
    }
        
     //key-value pair
})
export default store;
//export default configureStore;