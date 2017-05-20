import { Link } from 'react-router'
import  HomeIcon  from 'react-icons/lib/fa/home'
import  AddBookIcon  from 'react-icons/lib/fa/plus-square'
import  ListBooksIcon  from 'react-icons/lib/fa/table'

const Menu =() => (
   <nav className="menu">

     <Link to="/" activeClassName="selected">
      <HomeIcon color='white'/>
     </Link>
     <Link to="add-book" activeClassName="selected">
       <AddBookIcon color='white'/>
     </Link>
     <Link to="list-books" activeClassName="selected">
       <ListBooksIcon color='white'/>
     </Link>
   </nav>
)

module.exports = Menu