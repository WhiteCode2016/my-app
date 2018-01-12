import React, { Component } from 'react';

class LinkButton extends Component {
    constructor() {
        super();
        this.state = {isLinked: false};
    }

    handleClickOnLinkButton() {
        this.setState({
            isLinked: !this.state.isLinked
        })
    }

    render() {
       return (
           <div>
               <button onClick={this.handleClickOnLinkButton.bind(this)}>
                   {this.state.isLinked ? '取消' : '点赞'}
               </button>
           </div>
       )
    }
}

export default LinkButton