import React from "react";

class State extends React.Component {
    constructor(){
        super();
        this.state = {
            message: 'WELCOME VISITOR 🙏'
        }
    }

    handleClick(){
        this.setState({
            message: 'Thank you for Subscribing 🤩'
        },()=>{
            console.log(this.state.message);
        })
    }

  render() {
    return (
      <>
        <p> State {"->"} in Class Component </p>
        <div> { this.state.message } </div>
        <button onClick={ () => this.handleClick() }> subscribe </button>
      </>
    );
  }
}

export default State;
