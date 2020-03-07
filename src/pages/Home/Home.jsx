/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { useEffect, useState } from 'react'
import * as Amplify from '../../network/cognitoAWS'

function Home(props) {
  const [title, setTitle] = useState('cars')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetch = async () => {
      await props.setMovies(title, page)
    }
    fetch()
  }, [])

  const handleSubmit = evt => {
    evt.preventDefault()
    fetch()
  }

  const handleClick = async imdbID =>{
    props.setMovie(imdbID)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={e => setTitle(e.target.value)} />
      </form>
      <ul>
        {props.movies.map(item => {
          return (<li key={item.imdbID} onClick={()=> handleClick(item.imdbID)}>{item.Title}</li>)
        })}
      </ul>
      <input type="button" onClick={()=>Amplify.signOut()} />
    </div>
  )
}

export default Home
