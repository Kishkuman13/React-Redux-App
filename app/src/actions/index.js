import axios from 'axios'

export const GET_SPACE_STUFF = 'GET_SPACE_STUFF'
export const START_GETTING_SPACE_STUFF = 'START_GETTING_SPACE_STUFF'
export const SPACE_STUFF_SUCCESS = 'SPACE_STUFF_SUCCESS'
export const SPACE_STUFF_FAILURE = 'SPACE_STUFF_FAILURE'

function randomSolDate() {
  return Math.floor(Math.random() * 2000)
}


export const getSpaceStuff = () => (dispatch) => {
  dispatch({ type: START_GETTING_SPACE_STUFF })
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randomSolDate()}&api_key=QpeUgxumit2jqoosML9vdlebaJJ9E0ptvVplkRSX`)
    .then(res => {
      console.log('AM: Actions/index.js: getSpaceStuff: res: ', res)
      const photoData = res.data.photos 
      const photoArr = Object.values(photoData) 
      const randPhoto = photoArr[Math.floor(Math.random() * photoArr.length)]
      console.log(randPhoto)
      dispatch({
        type: SPACE_STUFF_SUCCESS,
        payload: {
          img: randPhoto
        }
      })
    })
    .catch(err => {
      console.error('Unable to retrieve data: ', err.message)
      dispatch({ type: SPACE_STUFF_FAILURE, payload: err.message })
    })
}