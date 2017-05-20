import { Component } from 'react'

class Autocomplete extends Component {
  get value() {
  	return this.refs.inputTitle.value
  }
  set value(inputValue) {
  	this.refs.inputTitle.value = inputValue
  }
  render(){
  	return (
       <div>
          <input type="text" ref="inputTitle" list="book-titles"/>
          <datalist id="book-titles">
            {this.props.options.map(
                (opt, i) =>
                <option key={i}>{opt}</option>
             )}
          </datalist>
       </div>
  	)
  }
}

module.exports = Autocomplete