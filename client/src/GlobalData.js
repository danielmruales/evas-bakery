import React, { Component } from 'react';
import axios from "axios"
import { userInfo } from 'os';
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


    signup = userInfo => {
        return axios.post('/auth/signup', userInfo).then(res => {
            const {user, token} = res.data
            this.setState({
                user, token
            })
            console.log(this.state)
            return res
        })

    }



    postCatering = (newCatering) =>{
        axios.post("/catering", newCatering).then(res => {
            this.setState(prevState =>({
                caterings: [...prevState.caterings, newCatering]
            }))
        })
    }

    postBreakfastMenu = (newBreakfast)=>{
        axios.post(`/breakfastmenu`,newBreakfast).then(res =>{
            this.setState(prevState => ({
                breakfastMenuItems: [...prevState.breakfastMenuItems, newBreakfast] 
            }))
        })
       
    }


    postSaladMenu = (newSalad)=>{
        axios.post(`/saladmenu`,newSalad).then(res =>{
            this.setState(prevState => ({
                saladMenuItems: [...prevState.saladMenuItems, newSalad] 
            }))
        })
       
    }


    postLunchMenu = (newLunch)=>{
        axios.post(`/lunchmenu`,newLunch).then(res =>{
            this.setState(prevState => ({
                lunchMenuItems: [...prevState.lunchMenuItems, newLunch] 
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
                        postBreakfastMenu: this.postBreakfastMenu,
                        postLunchMenu: this.postLunchMenu,
                        postSaladMenu: this.postSaladMenu,
                        signup: this.signup,
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