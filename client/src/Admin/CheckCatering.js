import React, {Component}from 'react'
import Axios from 'axios'

class Catering extends Component{
    constructor(){
        super()

        this.state ={
            cateringRequests:[]
        }
    }
    componentDidMount(){
        Axios.get('/catering').then((res=>{
            this.setState({cateringRequests:res.data})
        }))
    }

    
    render(){
        const Display = this.state.cateringRequests.map(item=>{
            return (
            <div key={item._id}>
                <p>{item.fullName}</p>
                <p>{item.email}</p>
                <p>{item.dateOfCatering}</p>
                <p>{item.numOfAttend}</p>
                <p>{item.orderItems}</p>
                <p>{item.phoneNum}</p>
                {/* {()=>{
                    if(item.questions){
                        return(<p>{item.questions}</p>)
                    }
                }} */}
            </div>)
        })
        console.log(this.state.cateringRequests)
        return(
            <div>
                {Display}
            </div>
        )
    }
}

export default Catering