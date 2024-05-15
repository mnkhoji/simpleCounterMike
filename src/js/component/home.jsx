import React from "react";

import Counter from "./counter.jsx";



//create your first component
const Home = (props) => {
	return (
		<div id="blackBand" className="d-flex justify-content">
			<Counter number = {<i class="fa-regular fa-clock "></i>}/>
			<Counter number = {Math.floor(props.timer/100000) %100000}/>
			<Counter number = {Math.floor(props.timer/10000) %10000}/>
			<Counter number = {Math.floor(props.timer/1000) %1000}/>
			<Counter number = {Math.floor(props.timer/100) % 100}/>
			<Counter number = {Math.floor(props.timer/10) % 10}/>
			<Counter number = {props.timer % 10}/>
			
		</div>
	);
};

export default Home;
