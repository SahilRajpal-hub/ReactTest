import React from 'react'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import Screen1 from './Components/Screen1'
import Screen2 from './Components/Screen2'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends React.Component {
  
  render() {
    return (
      <Router>
      <div className="page">
        <Sidebar/>
        <Route path='/3' component={Content} exact />
        <Route path='/2' component={Screen2} exact />
        <Route path='/1' component={Screen1} exact />
      </div>
      </Router>
    );
  }
}

export default App

