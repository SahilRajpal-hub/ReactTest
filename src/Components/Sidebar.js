import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    const [color,setcolor] = useState('')
    
    const setColor = (s) => {
        setcolor(s)
    }
    return (
          <div className="sidebar">

        <div className="headingD">
            <h3 id="heading">Agri-Purchase Management</h3>
        </div>

        <hr className="hr1"/>
        <div className="headingD">
            <h3 className="item"><Link onClick={()=>setColor('/1')} style={color==='/1' ? {color:'#79CBB1'} : {color:'white'}} to='1'>Agri-Input Master Maintainance</Link></h3>
        </div>

        <hr className="hr1"/>
        <div className="headingD">
            <h3 className="item"><Link onClick={()=>setColor('/2')} style={color==='/2' ? {color:'#79CBB1'} : {color:'white'}} to='/2'>Supplier Maintainance Master</Link></h3>
        </div>

        <hr className="hr1"/>
        <div className="headingD">
            <h3 className="item green"><Link onClick={()=>setColor('/3')} style={color==='/3' ? {color:'#79CBB1'} : {color:'white'}} to='/3'>Agri-Input Purchase Master</Link></h3>
        </div>

        <hr className="hr1"/>

        <div className="end">
            <hr className="hr2"/>
            <div className="headingD">
                <h3 className="item">Tax Master Maintainance</h3>
            </div>
        </div>

        </div>  
        
    )
}

export default Sidebar
