import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render () {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.shelfContents.map((book) =>
                <li>
                  <Book book={book} />
                </li>
              )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
