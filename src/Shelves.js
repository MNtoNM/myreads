import React, { Component } from 'react'
import Shelf from './Shelf'

class Shelves extends Component {
  render() {
    return (
      <div>
        <Shelf name='Currently Reading' shelfContents={this.props.books.filter(b => b.shelf === 'currentlyReading')} />
        <Shelf name='Want to Read' shelfContents={this.props.books.filter(b => b.shelf === 'wantToRead')} />
        <Shelf name='Done Reading' shelfContents={this.props.books.filter(b => b.shelf === 'read')} />
      </div>
    )
  }
}

export default Shelves
