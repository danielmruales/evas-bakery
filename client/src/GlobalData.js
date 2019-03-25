import React, { Component } from 'react';
import axios from "axios"
const {Provider,Consumer} = React.createContext()

class GlobalData extends Component {
    constructor(){
        super()
        this.state = {
            caterings: [{key: 'hello'}],
            breakfastMenuItems: [],
            lunchMenuItems: [],
            saladMenuItems: []
        }
    }
    postCatering = (newCatering) =>{
        axios.post("/catering", newCatering).then(res => {
            this.setState(prevState =>({
                caterings: [...prevState.caterings, newCatering]
            }))
        })
    }

  

    getBreakfastMenu = () => {
        axios.get('/breakfastmenu').then(res => {
            this.setState({breakfastMenuItems: res.data})
            console.log(res.data)
        })
    }

    getLunchMenu = () => {
        axios.get('/lunchmenu').then(res => {
            this.setState({lunchMenuItems: res.data})
            console.log(res.data)
        })
    }
    getSaladMenu = () => {
        axios.get('/saladmenu').then(res => {
            this.setState({saladMenuItems: res.data})
            console.log(res.data)
        })
    }
    
    render() {
        return (
            <Provider value={{
                        postCatering: this.postCatering,
                        getBreakfastMenu: this.getBreakfastMenu,
                        getLunchMenu: this.getLunchMenu,
                        getSaladMenu: this.getSaladMenu,
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