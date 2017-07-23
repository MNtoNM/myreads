import React, { Component } from 'react'
import Shelf from './Shelf'

class Shelves extends Component {
  render() {
    return (
      <div>
        <div><Shelf name='Currently Reading' /></div>
        <div><Shelf name='Want to Read' /></div>
        <div><Shelf name='Done Reading' /></div>
      </div>
    )
  }
}

export default Shelves
