import '../styles/ui.scss'
import BookIcon from 'react-icons/lib/fa/book'
import UserIcon from 'react-icons/lib/fa/user'

import { PropTypes } from 'prop-types'


const percentToDecimal = (decimal) => {
      return ( (decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
      return percentToDecimal(total / goal)
}

export const BookCount = ({ 
                        total=0, 
                        easyreader="na",
                        chapter="na",
                        goal=10 }) => (
       <div className="book-count">
            <div className="total-books">
               <span> {total} </span>
               <UserIcon />
            </div>
            <div className="easyreader">
               <span> {easyreader} </span>
               <BookIcon />
            </div>
            <div className="chapter">
               <span> {chapter} </span>
               <BookIcon />
            </div>
            <div>
                <span> {
                 calcGoalProgress(
                 	 total, 
                 	 goal
                 )} </span>
            </div>
       </div>  
 )


module.exports = BookCount