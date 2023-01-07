import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/demo">Action</Link></li>
    <li><Link class="dropdown-item" to="/buttons">Another action</Link></li>
    <li><Link class="dropdown-item" to="/cards">Something else here</Link></li>
	<li><Link class="dropdown-item" to="/cards1">Cards no minimalistas</Link></li>
  </ul>
</div>
			</div>
		</nav>
	);
};
