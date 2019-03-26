import React, { Component } from 'react';
import Navbar from './Navbar'
import axios from 'axios'
import {withGlobalData} from '../GlobalData'
import BreakfastEdit from "./BreakfastEdit.js"
import LunchEdit from "./LunchEdit.js"
import SaladEdit from "./SaladEdit.js"

class EditMenus extends Component {

    componentDidMount(){
  this.props.getSaladMenu()
    }

    deleteSaladMenuItem = (e) =>{
        axios.delete(`/saladmenu/${e.target.name}`)
    }

    

    render() {
    return (
            <div>
                <Navbar/>
                <BreakfastEdit/>
                <LunchEdit />
                <SaladEdit />
            </div>
        );
    }
}

export default withGlobalData(EditMenus);