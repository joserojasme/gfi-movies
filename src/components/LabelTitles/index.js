/* eslint react/destructuring-assignment: 0 */
/* eslint semi: 0 */
import React from 'react'
import { LabelTitle } from './styles'

function LabelTitles(props) {
  return (
    <div>
      <LabelTitle>{props.text}</LabelTitle>
    </div>
  )
}

export default LabelTitles
