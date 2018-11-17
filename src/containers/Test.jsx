import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increase} from '../actions';

class Test extends Component {
    
    componentDidMount(){
        setInterval(() => this.props.increase() ,1000)
    }

    render() { 
        console.log(this.props.increase);
        return ( 
            <div>
                <p>{this.props.compteur}</p>
            </div>
         );
    }
}
 
function mstp(state){
    return {
        compteur: state.counter
    }
}

function mdtp(dispatch){
    return bindActionCreators({increase}, dispatch)
}

export default connect(mstp, mdtp)(Test);