import React from 'react'

import BookList  from './BookList'
import BookCount from './BookCount'
import AddBookForm from './AddBookForm'
import Menu from './Menu'

class App extends React.Component{
  constructor( props ) {
    super(props);
    this.state = 
      {
     
    	 allBooksRead: [
          {
	         user: "Sebastian Martinez",
	         title: "Attack of the terrible toilet",
	         date: "2017-02-10",
	         category: "Childrens",
	         easyreader: true,
           chapter: false
          }
          
        ]
     }
     this.addBook = this.addBook.bind(this)
  }
  addBook (newBook) {
    this.setState({
      allBooksRead: [
        ...this.state.allBooksRead,
        newBook
      ]
    })
  }
  countBooks(filter) {
    const { allBooksRead } = this.state
    return allBooksRead.filter(
       (book) => (filter) ? book[filter] : book).length

  }
  render() {
  	return (
       <div className="app">
       <Menu />
        {(this.props.location.pathname === "/") ? 
          <BookCount total={this.countBooks()}
                 easyreader={this.countBooks("easyreader")}
                 chapter={this.countBooks("chapter")} /> :
        (this.props.location.pathname === "/add-book") ?
         <AddBookForm onNewBook={this.addBook} /> :
         <BookList books={ this.state.allBooksRead }
                   filter={this.props.params.filter} />
        }
         
       </div> 
  	)
  }
  
}
module.exports = App