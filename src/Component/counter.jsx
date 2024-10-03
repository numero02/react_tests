import {Component} from 'react';


export default class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
    }

    componentDidMount(){
        setInterval(()=>{

            this.setState({
                counter: this.state.counter + 1
            })

        }, 1000);
    }

    render(){
        return <>
            <h1>{this.state.counter} secondes ...</h1>
        </>;
    }
}