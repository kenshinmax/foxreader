import { Component } from 'react'
import FaShield from 'react-icons/lib/fa/shield' 

export default class Member() extends Component {
	const = {name, thumbnail, email, admin, makeAdmin} = this.props
	render() {
		return (
           <div className="member">
             <h1> {name} </h1>
             <a onClick={makeAdmin}>Make Admin </a>
             <img src={thumbnail} alt="profile picture"/>
             <p><a href={`mailto:${email}`}>{email}</a></p>
           </div>
		)
	}
}
