/* eslint-disable no-undef */
import React from 'react';
import Box from '@mui/material/Box';
//import IconButton from '@mui/material/IconButton';
import { useRef } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
//import { noteOperations } from '../../../shared/services/note-operation';
import { Note } from '../../../shared/model/note';
import {useDispatch }from 'react-redux';
import { addNote } from '../redux/note-slice';
//import Visibility from '@mui/icons-material/Visibility';
//import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Snackbar} from '@mui/material';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
 const Addnote = () => {
   console.log("ADD note called")
   
  const id = useRef();
  const title = useRef();
  const desc = useRef();
  const dispatch =useDispatch();
  const [open, setOpen] = useState(true);
  const handleClose=()=>{
     setOpen(false);
  }
  

 const handleAddnote=()=>{
  const idValue= id.current.value;
  const titleValue= title.current.value;
  const descValue= desc.current.value;
  console.log('id', idValue);
  console.log('title', titleValue);
  console.log('description', descValue); 
   //const noteobject= {'ID': idValue ,'Title': titleValue, 'Description': descValue};

   //console.log(noteobject)
   //const noteObject=noteOperations.addNote(idValue,titleValue,descValue)
    //console.log(noteObject) ;
    const noteObject =new Note(idValue,titleValue,descValue);
    dispatch(addNote(noteObject));
    setOpen(true);
    
 };
 

  return (
    <div>
     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        
   


        <TextField
          label="Note Id"
          id="id"
          inputRef= {id}
          sx={{ m: 1, width: '50ch' }}
          
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        
        
        <FormControl fullWidth sx={{ m: 1 ,width:'50ch'}}>
          <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
          <OutlinedInput
            id="note-title"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="title"
            inputRef={title}
          />
        </FormControl>

        <TextField
          label="Description"
          id="note-desc"
        inputRef= {desc}
          sx={{ m: 1, width: '50ch' }}
          multiline
          maxRows={4}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />

      </div>
      
     <Button onClick={handleAddnote} variant = "contained">
      AddNote
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Notes Added
        </Alert>
      </Snackbar>
      </Button>
    </Box>
    </div>
  )
}

export default Addnote;
