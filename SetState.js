import React from 'react';

class SetState extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    handleCount(){
        this.setState({
            count: this.state.count + 1
        },() => {
            console.log(this.state.count);
        })
    }
    render(){

        // when we use arrow Function in our event handling method we dont need  bind the function call

        return(
            <>
                <p> SetState {'->'} in Class Component </p>
                <div>  COUNT - {this.state.count}  </div>
                <button onClick={() => this.handleCount()}> count </button>  
            </>
        )
    }
}

export default SetState;