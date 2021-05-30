import React, {useState} from 'react'
import HeadingDiv from './HeadingDiv'
import HeadingDiv2 from './HeadingDiv2'
import HeadingDiv3 from './HeadingDiv3'
import Rows from './Rows'

const Content = () => {
    const [exceution,setExecution] = useState(true);
    const [heading,setHeading] = useState('')
    function setExecution1(e,v) {
        setExecution(v)
        setHeading(e)
    }
    const getColor = (v) => {
        if(heading===v) return 'black'
        return '#595959'
    }
    return (
        <div className="container">
            <HeadingDiv/>
            <div className="headingDiv">
                <div className="boxItem" style={{backgroundColor:getColor('pending')}} onClick={()=>setExecution1('pending',false)}>
                    <h3 className="bih2">Pending</h3>
                </div>
                <div className="boxItem" style={{backgroundColor:getColor('')}} onClick={()=>setExecution1('',true)} >
                    <h3 className="bih2">Executing</h3>
                </div>
                <div className="boxItem" style={{backgroundColor:getColor('Executed')}} onClick={()=>setExecution1('Executed',false)} >
                    <h3 className="bih2">Executed</h3>
                </div>
                <div className="boxItem" style={{backgroundColor:getColor('Completed')}} onClick={()=>setExecution1('Completed',false)}>
                    <h3 className="bih2">Completed</h3>
                </div>
            </div> 
            {!exceution && <h2>{heading}</h2>}
            {exceution && <HeadingDiv2/>}
            {exceution && <HeadingDiv3/>}
            {exceution && <Rows/>}
            {exceution && <Rows/>}
        </div>
    )
}
export default Content