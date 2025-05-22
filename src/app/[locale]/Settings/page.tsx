import React from 'react'
import "./Settings.css"
import TableSettings from '../Components/ComponentsSettings/TableSettings/page'
import FilterSettings from '../Components/ComponentsSettings/Filter/page'

function Settings() {
  return (
    <div className='Settings'>
        <h1>Access Control</h1>
        <FilterSettings/>
        <TableSettings/>
    </div>
  )
}

export default Settings