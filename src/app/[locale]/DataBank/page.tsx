import React from 'react'
import "./DataBank.css"
import Filter from '../Components/Filter/page'
import TableDataBank from '../Components/ComponentsDataBank/TableDataBank/page'

function DataBank() {
  return (
    <div className='DataBank'>
        <h1>Data Bank</h1>
        <TableDataBank/>
    </div>
  )
}

export default DataBank