import React, { Component } from 'react';
import {withGlobalData} from '../GlobalData'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
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
                    <input type='text' name='username' onChange={this.handleChange} />
                    <input type='text' name='password' onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default withGlobalData(Login);