import React, {Component}from 'react'
import Axios from 'axios'
import Navbar from './Navbar';

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
        Axios.delete(`/catering/${e.target.name}`)
    }
    
    render(){
        const Display = this.state.cateringRequests.map(item => {
            if(item.questions){
                return (
                    <div key={item._id} className="cater" onSubmit={this.delete}>
                        <h1 className='titleCatering'> Catering Request:</h1>
                        <p>Name: {item.fullName}</p>
                        <p>Email: {item.email}</p>
                        <p>Day of pickup: {item.dayOfEvent}</p>
                        <p>Time of pickup: {item.timeOfPickup}</p>
                        <p>Number of people: {item.numOfAttend}</p>
                        <p>Desired menu: {item.desiredMenu}</p>
                        <p>Phone Number: {item.phoneNum}</p>
                        <p>Questions: {item.questions}</p>
                        <form action="" name={item._id} className='delteBtn'>
                            <button>Delete</button>
                        </form>
                    </div>)
            }
        
        })
        console.log(this.state.cateringRequests)
        return(
            <div >
                <Navbar/> 
                <div className='cateringNav'>{Display}</div>
            </div>
        )
    }
}

export default Catering