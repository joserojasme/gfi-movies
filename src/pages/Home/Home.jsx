import React, { useEffect } from 'react'

function Home(props){
  useEffect(()=>{
    const fetch = async () =>{
      await props.setMovies()
    }

    fetch()
  },[])

  return(
    <div>Hola bebé Home</div>
  )
}

export default Home
