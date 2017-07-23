import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Shelves from './Shelves'
import Search from './Search'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {}

  render() {
    return (
      <div>

        <Route exact path='/' render={() => (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Shelves />
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
          <Search />
        )}/>

      </div>
    )
  }
}

export default BooksApp
