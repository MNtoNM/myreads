import React, { Component } from 'react'
import Shelf from './Shelf'

class Shelves extends Component {
  render() {
    console.log(this.props.books)

    let current = (this.props.books && this.props.books.filter((book) => book.shelf === 'currentlyReading'))

    let want = []

    let read = []

    return (
      <div>
        <div><Shelf name='Currently Reading' shelfContents={current} /></div>
        <div><Shelf name='Want to Read' shelfContents={want} /></div>
        <div><Shelf name='Done Reading' shelfContents={read} /></div>
      </div>
    )
  }
}

export default Shelves
