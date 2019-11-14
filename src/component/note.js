import React, { Component } from 'react';
import PropTypes from 'prop-types';

const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

class Note extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (<React.Fragment>
            <div className="form-group">
                Note
            </div>
        </React.Fragment>)
    }
}

export default Note