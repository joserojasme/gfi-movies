import React, { useState } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { useStyles } from './styles'
import config from '../../config/constants'
import Dialog from '../Dialog'

const nameStorageFavorites = 'favoritesMovies'
const gfiImage = 'https://aecconsultoras.com/wp-content/uploads/2020/01/logo-asociados-gfi.jpg'

export default function SingleLineGridList(props) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()

  const handleClick = async imdbID => {
    await props.setMovie(imdbID)
    setOpen(true)
  }

  const handleClickAddFavorite = async (movie) => {
    const favorites = []
    const favoritesMovies = await JSON.parse(localStorage.getItem(nameStorageFavorites))
    if (favoritesMovies === null) {
      favorites.push(movie)
      await localStorage.setItem(nameStorageFavorites, JSON.stringify(favorites))
      await props.setFavoritesMovies()
    } else {
      const filterMovies = favoritesMovies.filter(item=>item.imdbID !== movie.imdbID)
      filterMovies.push(movie)
      await localStorage.setItem(nameStorageFavorites, JSON.stringify(filterMovies))
      await props.setFavoritesMovies()
    }
  }

  const calcularVisualizacion = () =>{
    let number = 5.5
    if(props.type === config.favorites){
      if(props.data.length === 1)number = 1
      if(props.data.length === 2)number = 2
      if(props.data.length === 3)number = 3
      if(props.data.length === 4)number = 4
    }
    return number
  }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={calcularVisualizacion()}>
        {props.data.map(item => {
          if (item.Type === props.type) {
            return (
              <GridListTile key={item.imdbID}>
                <img src={item.Poster === 'N/A' ? gfiImage : item.Poster} alt={item.Title} onClick={() => handleClick(item.imdbID)} />
                <GridListTileBar
                  title={`${item.Title.substring(0, 15)}...`}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  onClick={() => handleClickAddFavorite(item)}
                  actionIcon={
                    <IconButton aria-label={`star ${item.Title.substring(1, 15)}`}>
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </GridListTile>
            )
          }

          if (props.type === config.favorites) {
            return (
              <GridListTile key={`f${item.imdbID}`}>
                <img src={item.Poster === 'N/A' ? gfiImage : item.Poster} alt={item.Title} onClick={() => handleClick(item.imdbID)}/>
                <GridListTileBar
                  title={`${item.Title.substring(0, 15)}...`}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  onClick={() => handleClickAddFavorite(item)}
                  actionIcon={
                    <IconButton aria-label={`star ${item.Title.substring(1, 15)}`}>
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </GridListTile>
            )
          }
        })}
      </GridList>
      {open &&
        <Dialog open={open} onClick={handleClose} movieDetail={props.movieDetail} />
      }
    </div>
  )
}

/* eslint react/destructuring-assignment: 0 */
/* eslint array-callback-return: 0 */
/* eslint consistent-return: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
