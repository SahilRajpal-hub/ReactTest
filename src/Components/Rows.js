import React,{useState} from 'react'
import RowDetail from './RowDetail'
import CsvDownloader from 'react-csv-downloader';

const Rows = () => {
    const [details,setDetails] = useState(false)
    const columns = [{
        id: '0',
        displayName: ' '
      },{
        id: '1',
        displayName: 'Agri Input Category'
      }, {
        id: '2',
        displayName: 'Product Image'
      }, {
        id: '3',
        displayName: 'Product Description'
      }, {
        id: '4',
        displayName: 'Order Quantity'
      }];
    
      const datas = [{
        0: '1',
        1: 'Seeds/Seedling',
        2: 'www.pic.com',
        3: 'Chilli skata',
        4: '26',
      }];
    const iconStyle = {
        fontSize:'25px',
        verticalAlign:'middle',
        display:'table-cell'
    }
    const iconStyle2 = {
        fontSize:'40px',
        verticalAlign:'middle',
        display:'table-cell'
    }
    const openDetails = () => {
        if(document.getElementById('drop').className==='fas fa-caret-up')
        document.getElementById('drop').className = 'fas fa-caret-down'
        else 
        document.getElementById('drop').className = 'fas fa-caret-up'
        setDetails(!details)
    }
    return (
        <>
        <div className="tab" onClick={() => openDetails()}>
                <div className="item1" id="dropdown">
                    <h2 className="bih3">AGBUY14343256276</h2>
                    <i id='drop' style={iconStyle} 
                        className="fas fa-caret-up"></i>
                </div>
                <div className="verticalLine"></div>
                <div className="item2">
                    <img className="image" src="img_avatar.png" alt=""/>
                    <div style={{marginLeft:'10px'}}>
                        <h2 className="imageHeading">Alex Lee</h2>
                        <h1 style={{fontSize:'10px',}}>Mon,13 April, 10:49 pm</h1>
                    </div>
                </div>
                <div className="verticalLine"></div>
                <div className="item3">
                    <i style={iconStyle2}
                        className="far fa-file-excel"></i>
                    <h2 className="bih3">AGBUY14343256276</h2>
                    
                    <CsvDownloader
                    filename="myfile"
                    extension=".csv"
                    separator=";"
                    wrapColumnChar="'"
                    columns={columns}
                    datas={datas}
                    style={{verticalAlign:'middle',display:'table-cell'}} > 
                    <i style={iconStyle} className="fas fa-download"></i>
                    </CsvDownloader>
                </div>
            </div>
            {details && <RowDetail/>}
            
            </>
    )
}

export default Rows
