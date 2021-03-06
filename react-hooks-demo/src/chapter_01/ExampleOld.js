// 基础写法

import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
        }
        this.handleAddCount = this.handleAddCount.bind(this)
    }

    render() { 
        const { count } = this.state
        return ( 
            <div>
                <p>you click {count} times</p>
                <button onClick={this.handleAddCount}>Click Me</button>
            </div>
         );
    }
    handleAddCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
}
 
export default Example