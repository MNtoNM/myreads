import React, { Component } from 'react'
import Shelf from './Shelf'

class Shelves extends Component {
  render() {
    return (
      <div>
        <Shelf
          name='Currently Reading'
          shelfContents={this.props.books.filter(b => b.shelf === 'currentlyReading')}
          onChange={this.props.onChange}
        />
        <Shelf
          name='Want to Read'
          shelfContents={this.props.books.filter(b => b.shelf === 'wantToRead')}
          onChange={this.props.onChange}
        />
        <Shelf
          name='Done Reading'
          shelfContents={this.props.books.filter(b => b.shelf === 'read')}
          onChange={this.props.onChange}
          />
      </div>
    )
  }
}

export default Shelves
