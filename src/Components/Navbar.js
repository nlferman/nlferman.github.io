import React, {Component} from 'react';
import $ from 'jquery';
import '../App.css';


class Navbar extends Component {
	render () {
		const {curPage} = this.props;
		return (
			<nav id="nav-wrap">
				<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
				<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

				<ul id="nav" className="nav">
					<li className={curPage === "Home" ? "current" : "smoothscroll"}><a className="smoothscroll" onClick={(e) => {this.props.setPage("Home");}}>Home</a></li>
					<li className={curPage === "About" ? "current" : "smoothscroll"}><a className="smoothscroll" onClick={(e) => {this.props.setPage("About");}}>About</a></li>
					<li className={curPage === "Resume" ? "current" : "smoothscroll"}><a className="smoothscroll" onClick={(e) => {this.props.setPage("Resume");}}>Resume</a></li>
					<li className={curPage === "Portfolio" ? "current" : "smoothscroll"}><a className="smoothscroll" onClick={(e) => {this.props.setPage("Portfolio");}}>Works</a></li>
					{/* <li className={curPage === "Contact" ? "current" : "smoothscroll"}><a className="smoothscroll" href="#contact" onClick={(e) => {e.preventDefault(); this.props.setPage("Contact");}}>Contact</a></li> */}
				</ul>
			</nav>
		)
	}
}

export default Navbar;