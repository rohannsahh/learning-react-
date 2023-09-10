import React from 'react'
import { Routes } from 'react-router-dom'
import Addnote from '../../modules/notes/components/Addnote'
import { Route } from 'react-router-dom'
import SearchNote from '../../modules/notes/components/SearchNote'
import ViewAll from '../../modules/notes/components/ViewAll'
import Update1 from '../../modules/notes/components/Update1'


const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='add-note' element={<Addnote/>}/>
        <Route path='search-note' element={<SearchNote/>}/>
        <Route path='view-all' element={<ViewAll/>}/>
        <Route path='update-note' element={<Update1/>}/>
      </Routes>
    </div>
  )
}

export default Main
