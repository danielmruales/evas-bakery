import React, { Component } from 'react';
import axios from "axios"
const {Provider,Consumer} = React.createContext()

class GlobalData extends Component {
    constructor(){
        super()
        this.state = {
            caterings: [{key: 'hello'}],
            menuItems: []
        }
    }
    postCatering = (newCatering) =>{
        axios.post("/catering", newCatering).then(res => {
            this.setState(prevState =>({
                caterings: [...prevState.caterings, newCatering]
            }))
        })
    }


    getMenu = () => {
        axios.get('/menu').then(res => {
            this.setState({menuItems: res.data})
            console.log(res.data)
        })
    }
    
    render() {
        return (
            <Provider value={{
                        postCatering: this.postCatering,
                        getMenu: this.getMenu,
                        ...this.state
                        }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default GlobalData;

export function withGlobalData (C){
    return props => <Consumer>
                        {value => <C {...value}{...props}/>}
                    </Consumer>
}