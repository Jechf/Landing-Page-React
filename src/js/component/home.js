import React from "react";


import { Card } from "./card";
import { Cardgroup } from "./cardgroup";
import { Footerpage } from "./footerpage";
import { Navbarweb } from "./navbar";

//create your first component
const Home = () => {
	return (

		<div>
				<Navbarweb/>
				<Cardgroup/>	
				<Footerpage/>
			
		 </div>
		
	);
}
export default Home;
