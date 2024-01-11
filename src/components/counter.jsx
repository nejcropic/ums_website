import React, { Component } from 'react';
import logo from '../images/logoUMS.gif';

{/* state =  Za dinamično spreminanje (spremenljivka).. definiraš z this.state.'ime spr'*/}
class Counter extends Component {    
    state = {
        count: 0, 
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: logo
    };
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }
    
    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className="badge badge-warning m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map(tag  => <li key={tag}>{ tag }</li>) }
                </ul>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state; {/* spremenljivki count določaš stanje z this.state */}
        return count === 0 ? <h1>ZERO</h1> : count;
    }
}
 
export default Counter;