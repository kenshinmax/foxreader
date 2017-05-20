import Rocket from 'react-icons/lib/fa/rocket'
import Mobile from 'react-icons/lib/fa/mobile'
import Calendar from 'react-icons/lib/fa/calendar'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import BookRow from './BookRow'


export const BookList = ({books, filter}) => {
  const filteredBooks = (!filter || 
    !filter.match(/chapter|easyreader/))?
    books:
    books.filter(book => book[filter])

  return (
   <div className="book-list">
   <table>
     <thead>
       <tr>
         <th>User</th>
         <th>Title</th>
         <th>Date</th>
         <th>Category</th>
         <th>Chapter</th>
         <th>Easy Reader</th>
       </tr>
       <tr>
         <td colSpan={8}>
          <Link to="/list-books">
            All Books
          </Link>
          <Link to="/list-books/chapter">
            Chapter
          </Link>
          <Link to="/list-books/easyreader">
            Easy Reader
          </Link>
         </td>
       </tr>
     </thead>
     <tbody>
      {filteredBooks.map(( book, i ) =>
         <BookRow key={i}
                  {...book}
                  />
        )}
    </tbody>
   </table>
   </div>

   )
}

BookList.propTypes = {
  books: PropTypes.array
}

module.exports = BookList