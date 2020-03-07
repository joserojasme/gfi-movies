/* eslint react/destructuring-assignment: 0 */

import React, { useEffect } from 'react'
import SingleLineGridList from '../../components/SingleLineGridList'
import AppBarSearch from '../../components/AppBarSearch'
import LabelTitle from '../../components/LabelTitles'
import config from '../../config/constants'

function Home(props) {
  useEffect(() => {
    const fetchSuggestMovies = async () => {
      await props.setSuggestMovies()
    }
    fetchSuggestMovies()
  }, [])

  useEffect(() => {
    const getFavoritesMovies = async () => {
      await props.setFavoritesMovies()
    }
    getFavoritesMovies()
  }, [])

  return (
    <div>
      <AppBarSearch />
      {props.movies.length > 0 &&
        <div>
          <LabelTitle text='Resultado de búsqueda' />
          <SingleLineGridList data={props.movies} type={config.movie} />
        </div>
      }
      {props.suggestMovies.length > 0 &&
        <div>
          <LabelTitle text='Películas' />
          <SingleLineGridList data={props.suggestMovies} type={config.movie} />
          <LabelTitle text='Series' />
          <SingleLineGridList data={props.suggestMovies} type={config.series} />
        </div>
      }
      {props.favoritesMovies !== null &&
       props.favoritesMovies.length > 0 &&
            <div>
              <LabelTitle text='Favoritas' />
              <SingleLineGridList data={props.favoritesMovies} type={config.favorites} />
            </div>
      }
    </div>
  )
}

export default Home
