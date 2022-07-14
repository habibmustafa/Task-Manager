import React, { Component } from 'react';
import "./Keywords.css"

class Keywords extends Component {
    render() {
        return (
            <div>
                <h5 className='task-item__keywords-title'>Keywords</h5>
                <ul className='task-item__keywords'>
                    <li>Wonder</li>
                    <li>SMS</li>
                </ul>
            </div>
        );
    }
}

export default Keywords;