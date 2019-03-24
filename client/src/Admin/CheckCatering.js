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
    delete = (e)=>{
        // e.preventDefault()
        // e.target.
    }
    
    render(){
        const Display = this.state.cateringRequests.map(item=>{
            if(item.questions){
                return (
                    <div key={item._id} className="cater" onSubmit={this.delete}>
                        <h1> Caterig Request:</h1>
                        <p>Name: {item.fullName}</p>
                        <p>Email: {item.email}</p>
                        <p>Day of pickup: {item.dayOfEvent}</p>
                        <p>Time of pickup: {item.timeOfPickup}</p>
                        <p>Number of people: {item.numOfAttend}</p>
                        <p>Desired menu: {item.desiredMenu}</p>
                        <p>Phone Number: {item.phoneNum}</p>
                        <p>Questions: {item.questions}</p>
                        <form action="" name={item._id}>
                            <button>delete</button>
                        </form>
                    </div>)
            }
        })
        console.log(this.state.cateringRequests)
        return(
            <div style={{display:'grid', gridTemplateColumns:"repeat(auto-fill, minmax(300pt, 1fr))"}}>
                {Display}
            </div>
        )
    }
}

export default Catering