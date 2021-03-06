import React, { Component } from 'react'

class Book extends Component {
  render() {

    const {book} = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + (book.imageLinks ? book.imageLinks.thumbnail : "https://books.google.com/googlebooks/images/no_cover_thumb.gif") + ")" }}></div>
            <div className="book-shelf-changer">
              <select defaultValue={this.props.book.shelf} onChange={(event) => this.props.onChange(event.target.value, this.props.book)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Done Reading</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors && this.props.book.authors[0]}</div>
      </div>
    )
  }
}

export default Book
