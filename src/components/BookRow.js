import Rocket from 'react-icons/lib/fa/rocket'
import Mobile from 'react-icons/lib/fa/mobile'
import Calendar from 'react-icons/lib/fa/calendar'

import PropTypes from 'prop-types'

export const BookRow = ({
               user, 
               title,
               date,
               category,
               easyreader,
               chapter}) => (

  <tr>
    <td>
     {user}
    </td>
    <td>
     {title}
    </td>
     <td>
      {date}
    </td>
    <td>
      {(category) ? category : null}
    </td>
    <td>
      {(chapter) ? "true" : "false" }
    </td>
    <td>
      {(easyreader) ? "true" : "false" }
    </td>
  </tr>
)

BookRow.propTypes = {
  user: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  category: PropTypes.string,
  easyreader: PropTypes.bool,
  chapter: PropTypes.bool
}

module.exports = BookRow