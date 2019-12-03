import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        console.log("child constr : ", props);
    }
    componentDidMount(){
        console.log("child comp did mount")
    }

    componentDidUpdate(prevProps) {
        console.log("child update")
      }

    render() {
        return (
            <div>
                {this.props.test}
            </div>
        )
    }
}
