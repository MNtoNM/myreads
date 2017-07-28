import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Shelves from './Shelves'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  onChange = (shelf, book) => {
    BooksAPI.update(book, shelf).then(response => {
      // existing logic
      // set book's shelf to selected value
      book.shelf = shelf

      this.setState(state => ({
        // first, filter out the book from our existing list
        // next, concat the book (with updated shelf) to our array
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div>

        <Route exact path='/' render={() => (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Shelves
              books={this.state.books}
              onChange={this.onChange}
            />
            <div className="open-search">
              <Link
                to='/search'
                className='add-book'
                >Add A Book
              </Link>
            </div>
          </div>
        )}/>

        <Route path='/search' render={() => (
          <Search onChange={this.onChange}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
