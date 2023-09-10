import { Note } from "../model/note";
 export const noteOperations={
    notes:[],
  addNote(id,title,desc){
   const noteObject=new Note(id,title,desc)
   this.notes.push(noteObject);
   console.log(this.notes)
   return noteObject;
 },
 getNotes() {
  
  return this.notes;
},
}
//export default noteOperations;
