import React, { Component } from 'react';
import axios from "axios"
const {Provider,Consumer} = React.createContext()

class CateringProvider extends Component {
    constructor(){
        super()
        this.state = {
            caterings: [{key: 'hello'}]
        }
    }
    postCatering = (newCatering) =>{
        axios.post("/catering", newCatering).then(res => {
            this.setState(prevState =>({
                caterings: [...prevState.caterings, newCatering]
            }))
        })
    }
    render() {
        return (
            <Provider value={{postCatering: this.postCatering,
                        ...this.state}}>
                {this.props.children}
            </Provider>
        );
    }
}

export default CateringProvider;

export function withCatering (C){
    return props => <Consumer>
                        {value => <C {...value}{...props}/>}
                    </Consumer>
}