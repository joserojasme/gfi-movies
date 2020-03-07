/* eslint react/destructuring-assignment: 0 */
/* eslint array-callback-return: 0 */
/* eslint consistent-return: 0 */

import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import {useStyles} from './styles'

export default function SingleLineGridList(props) {
  const classes = useStyles()

  const handleClick = async imdbID =>{
    props.setMovie(imdbID)
  }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5.5}>
        {props.data.map(item => {
          if(item.Type === props.type){return(
            <GridListTile key={item.imdbID} onClick={()=> handleClick(item.imdbID)}>
              <img src={item.Poster} alt={item.Title} />
              <GridListTileBar
                title={`${item.Title.substring(0,15)}...`}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${item.Title.substring(1,15)}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          )}})}
      </GridList>
    </div>
  )
}
