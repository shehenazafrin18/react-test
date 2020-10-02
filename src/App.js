import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {About} from './components/About';
import {Contact} from './components/Contact';

function App() {
	return (
	 <Router>
	<div className="container">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					
					
					<li className="nav-item" >
					 <Link to="/">Home</Link>
					</li>
					<li className="nav-item" >
					 <Link to="/About">About</Link>
					</li>
					<li className="nav-item" >
					 <Link to="/Contact">Contact</Link>
					</li>
				
				</ul>
			</div>
		</nav>
		<Switch>
		
          <Route path="/Contact">
            <Contact />
          </Route>
		  
          <Route path="/About">
            <About />
          </Route> 
		  
          
        </Switch>
	</div>
	 </Router>
	);

}

export default App;
