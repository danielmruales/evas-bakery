import React, { Component } from 'react';
import {withGlobalData} from '../GlobalData'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    clearInputs = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signup(this.state).then(()=> this.props.history.push('/catering')) //This part is basically jumping the user to the page that you specify right after they hit the btn
        this.clearInputs();
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <button>Create an Account</button>
                </form>
            </div>
        );
    }
}

export default withGlobalData(Signup);