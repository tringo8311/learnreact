import React from 'react';
import logo from './logo.svg';
import './App.css';

import Data from "./Data"
import ClockCircle from "./component/ClockCircle"

import { FaBeer, FaDiaspora } from 'react-icons/fa';
//import { IconContext } from "react-icons";

function App() {
  	return (
    <div className="App">
		<ClockCircle/>
      	<section style={{ margin: "0 auto", width: "600px", "text-align": "left" }}>
			<Summary summary={Data.summary}/>
			<PersonalSkill dataArray={Data.skills}/>
			<Education/>
			<WorkExperience/>
			<Hobby/>
		</section>
    </div>
  	);
}
export default App;

class ListItem extends React.Component {
	render() {
		let listData = this.props.dataArray.map((myItem) =>
			<li>{myItem}</li>
		);
		return <ul>{listData}</ul>
	}
}

class Summary extends React.Component {
	render() {
		return <div><section class="short-summary">
			<h1 style={{ "text-align": "center" }}>{this.props.summary.fullName}</h1>
			<div>This is my idea about my career</div>
		</section>
			<section class="contact">
				<ul>
					<li>Gender: {this.props.summary.fullName}</li>
					<li>Phone: {this.props.summary.phone}</li>
					<li>Email: {this.props.summary.email}</li>
					<li>Address: {this.props.summary.address}</li>
				</ul>
			</section></div>
	}
}

class PersonalSkill extends React.Component {
	render() {
		return <section class="person-skill">
			<h2>This is my skills:</h2>
			<ListItem dataArray={this.props.dataArray} />
		</section>
	}
}

class Education extends React.Component {
	render() {
		return <section class="education">
			<h2>This is my education:</h2>
			<ul>
				<li>Graduate 2005 at ABC University with Balenchor Certificate </li>
				<li>Graduate 2005 at ABC University with Balenchor Certificate </li>
				<li>Graduate 2005 at ABC University with Balenchor Certificate </li>
				<li>Graduate 2005 at ABC University with Balenchor Certificate </li>
			</ul>
		</section>;
	}
}

class WorkExperience extends React.Component {
	render() {
		return <section class="work-experince">
			<h2>This is my work-experince:</h2>
			<p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
			<p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
			<p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
			<p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
		</section>
	}
}

class Hobby extends React.Component {
	render() {
		return <section class="hobby">
			<h2>This is my hobby</h2>
			<p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
			<p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
			<p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
			<p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
		</section>
	}
}