import './App.css'
import React from 'react'
import { connect } from 'react-redux'

import NASA from './components/NASA.js'
import { getSpaceStuff } from './actions'

function App(props) {

  const handleGetData = e => {
    e.preventDefault();
    props.getSpaceStuff();
  }

  return (
    <div className="App">
      <button onClick={handleGetData}>Fetch Rover Images</button>
      <NASA />
    </div>
  );
}

export default connect(() => {return{}},{getSpaceStuff})(App);
