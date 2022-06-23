import React from "react";


import { Cardgroup } from './cardgroup'
import { Jumbotron } from './jumbotron'
import { Navbarweb } from './navbar'
import { Footerpage } from './footerpage'


//create your first component
const Home = () => {
	return (
		<div className="container-fluid mb-5">
				<Navbarweb/>
        <div className="col-1"></div>
        	<div className="col-10 container-fluid">
				<Jumbotron/>
				<Cardgroup/>	
				<Footerpage/>
		 </div>
        <div className="col-1"></div>
        </div>
	);
}
export default Home;
