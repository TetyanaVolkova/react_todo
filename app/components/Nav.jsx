var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
	return(
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React App</li>
					<li>
						<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>First</IndexLink>
					</li>
					<li>
						<Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Second</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">
						Created by ...
					</li>
				</ul>
			</div>
		</div>
	);
};

module.exports = Nav;