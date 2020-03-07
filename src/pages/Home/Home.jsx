/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React, { useEffect, useState } from 'react'
import SingleLineGridList from '../../components/SingleLineGridList'
import AppBarSearch from '../../components/AppBarSearch'
import LabelTitle from '../../components/LabelTitles'
import config from '../../config/constants'

function Home(props) {
  useEffect(() => {
    const fetch = async () => {
      await props.setSuggestMovies()
    }
    fetch()
  }, [])

  return (
    <div>
      <AppBarSearch />
      {props.suggestMovies.length > 0 &&
      <div>
        <LabelTitle text='Películas' />
        <SingleLineGridList data={props.suggestMovies} type={config.movie} />
        <LabelTitle text='Series' />
        <SingleLineGridList data={props.suggestMovies} type={config.series} />
        <LabelTitle text='Episodios' />
        <SingleLineGridList data={props.suggestMovies} type={config.episode} />
      </div>
      }

    </div>
  )
}

export default Home
