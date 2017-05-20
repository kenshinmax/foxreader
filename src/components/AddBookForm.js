import Component from 'react'
import PropTypes from 'prop-types'
import Autocomplete from './Autocomplete'

const bookTitles = [
   "Fly Guy",
   "Piggie & Gerald",
   "Rickie Rachotta"
]



export const AddBookForm = ({user, title, 
	                    date, category, chapter, 
	                    easyreader, onNewBook}) => {
     let _user, _title, _date, _category, _chapter, _easyreader


	 const submit = (e) => {
       	e.preventDefault()
       	onNewBook({
       		user: _user.value,
       		title: _title.value,
       		date: _date.value,
       		category: _category.value,
       		chapter: _chapter.checked,
       		easyreader: _easyreader.checked
       	})
        _user.value = ''
       	_title.value = ''
       	_date.value = ''
       	_category.value = ''
       	_chapter.checked = false
       	_easyreader.checked = false
     }

	return (
      
    	<form className="add-book" onSubmit={submit}>
    	<label htmlFor="user">User </label>
          <input id="user" 
            type="text"
            ref={input => _user = input}
            defaultValue={user}
            required />
    	  <label htmlFor="book">Title </label>
          <Autocomplete options={bookTitles}
            ref={input => _title = input}/>

          <label htmlFor="date">Date </label>
          <input id="date" 
            type="date"
            ref={input => _date = input}
            defaultValue={date}
            required />
          
          <label htmlFor="category">Category</label>
          <input id="category" 
            type="text"
            ref={input => _category = input}
            defaultValue={category}
            required />

          <div>
           <label htmlFor="chapter">Chapter </label>
           <input id="chapter"
            type="checkbox"
            ref={input => _chapter = input}
            defaultChecked={chapter} />
          </div>
          <div>
           <label htmlFor="easyreader">Easy reader </label>
           <input id="easyreader"
            type="checkbox"
            ref={input => _easyreader = input}
            defaultChecked={easyreader}/>
          </div>
          <button> Add Book </button>
    	</form>
    	)
}


AddBookForm.defaultProps = {
  user: "Annonymous",
  title: "Captin Underpants",
  date: "2017-02-19",
  category: "Childrens",
  chapter: true,
  easyreader: false
}


module.exports = AddBookForm