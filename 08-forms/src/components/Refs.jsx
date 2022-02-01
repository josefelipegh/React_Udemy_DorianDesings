import React, { Component } from 'react';

class Refs extends Component {
    
    handleFocus = () => {
        document.getElementById('input').focus();
    }

    render() { 
        return (
            <>
                <input type="text" id='input' />
                <button onClick={this.handleFocus}>Focus</button>
            </>
        );
    }
}
 
export default Refs;