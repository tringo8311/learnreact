
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        //alert("tao mount roi nha")
    }

    componentWillMount() {
        let d = this;
        let tri = `Toi seo mount ${this.state.date}`;
        //alert(tri)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        //alert("render ko kip")
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock
//ReactDOM.render(<Clock />,document.getElementById('root'));