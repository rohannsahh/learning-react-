import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import  {noteOperations}  from '../../../shared/services/note-operation'
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../redux/note-slice';

const ViewAll = () => {
  //const notes = noteOperations.getNotes();
  //console.log(notes); 
  //const getNotes

  const dispatch =useDispatch();
  const noteObject= useSelector(state=>{
    console.log(state)
    return {'notes':state.noteSlice.notes}
  },[])
   
 useEffect(()=>{
  console.log('component mount')
  dispatch(addNote)
 })

  return (

<Box margin={3}>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} >
      <TableHead>
        <TableRow>
          <TableCell >Note Id</TableCell>
          <TableCell align="right">Title</TableCell>
          <TableCell align="right">Description</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
       {noteObject.notes.map((note)=>(<TableRow key={note.id}>
       <TableCell key={note.id} >{note.id}</TableCell>
       <TableCell key={note.title} align='right'>{note.title}</TableCell>
       <TableCell key={note.desc} align='right'>{note.desc}</TableCell>

       </TableRow>))} 

      </TableBody>
      </Table>
      </TableContainer>

</Box>

    
  )
}

export default ViewAll
 