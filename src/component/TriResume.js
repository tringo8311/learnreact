import React from 'react';

class ListItem extends React.Component {
    render() {
        let listData = this.props.dataArray.map((myItem) =>
            <li key={myItem["key"]}>{myItem["value"]}</li>
        );
        return <ul>{listData}</ul>
    }
}

class Summary extends React.Component {
    render() {
        return <div><section className="short-summary">
            <h1 style={{ "textAlign": "center" }}>{this.props.summary.fullName}</h1>
            <div>This is my idea about my career</div>
        </section>
            <section className="contact">
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
        return <section className="person-skill">
            <h2>This is my skills:</h2>
            <ListItem dataArray={this.props.dataArray} />
        </section>
    }
}

class Education extends React.Component {
    render() {
        return <section className="education">
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
        return <section className="work-experince">
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
        return <section className="hobby">
            <h2>This is my hobby</h2>
            <p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
            <p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
            <p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
            <p>Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem </p>
        </section>
    }
}

function TriResume(props) {
    return (<div>
        <Summary summary={props.Data.summary} />
        <PersonalSkill dataArray={props.Data.skills} />
        <Education />
        <WorkExperience />
        <Hobby />
        </div>
    )
}
export default TriResume;