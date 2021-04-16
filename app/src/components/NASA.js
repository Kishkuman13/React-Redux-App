import React from 'react'
import { connect } from 'react-redux'

const NASA = props => {
  console.log(props.nasa)

  return (
    <div>
      {props.error && <div style={{ color: 'red' }}>**{props.error}**</div>}
      {`${props.headline}`}
      {props.isGetting ? <div>Aquiring Data</div>
        : props.nasa.img && 
          <div className='nasa-cont'>
            <h2>{props.nasa.img.rover.name} Rover</h2>
            <p>Date: {props.nasa.img.earth_date}</p>
            <p>Status: {props.nasa.img.rover.status}</p>
            <p>{props.nasa.img.camera.full_name}</p>
            <p></p>
            <img className='nasa-img' src={props.nasa.img.img_src} alt='Space Stuff!' />
          </div>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    headline: state.headline,
    nasa: state.nasa,
    isGetting: state.isGetting,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(NASA);
