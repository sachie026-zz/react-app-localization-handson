import React, { Component } from 'react'
import Child from "./child"


export default class Parent extends Component {
    constructor(){
        super();
        console.log("parent constr");
    }
    componentDidMount(){
        console.log("parent comp did mount")
    }

    handle = () => {
        console.log("clickd");
        this.setState({
            one: 2
        })
    }

    componentDidUpdate(prevProps) {
        console.log("parent update")
      }

    state = {
        one : 1
    }

    render() {
        return (
            <div>
                <Child test = {this.state.one}/>    
                <button onClick={this.handle}> Click</button>
            </div>
        )
    }
}
