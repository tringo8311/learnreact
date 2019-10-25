import React from 'react';
import logo from './logo.svg';
import './App.css';

import Data from "./Data"

import TriResume from "./component/TriResume"
import { TriComment } from "./component/TriComment"
import { TriDressingRoom } from "./component/TriDressingRoom"
import ClockCircle from "./component/ClockCircle"
import Calculator from "./component/Calculator"

import { FaBeer, FaDiaspora } from 'react-icons/fa';
//import { IconContext } from "react-icons";

function App() {
  	return (
    <div className="App">
		{/* <ClockCircle/> */}
		{/* <Calculator /> */}
		{/* <TriComment/> */}
		<section style={{ margin: "0 auto", width: "1200px", "textAlign": "left" }}>
			{/* <TriResume Data={Data}/> */}
					<TriDressingRoom/>
		</section>

    </div>
  	);
}
export default App;