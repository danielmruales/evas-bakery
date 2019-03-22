import React, { Component } from 'react';
import "./Content.css"
class Content extends Component {
    render() {
        return (
            <div className ="content">
                <div className="ownerpic">
                    <img src="https://cityhomecollective.blob.core.windows.net/uploads/cms/blog/Restaurants%20and%20Cocktails/Eva%27s%20Boulangerie/evas-boulangerie-20.jpg" alt=""></img>
                </div>

                <div className="about">
                    <h1>About Eva's Bakery</h1>
                    <p>
                    Eva Coombs was renowned for cooking with an abundance of both love and butter. 
                    Family and friends took any opportunity to stop by her home for nourishment and 
                    pleasure. Her great grandson, Charlie, was always by her side in the kitchen, 
                    and Eva's passion for French cooking and respect for ingredients transferred to 
                    her young apprentice. 
                    </p>

                    <p>Chef /Owner, Charlie Perry, opened Eva, the restaurant, 
                    and Eva's Bakery Boulangerie in her honor.</p>
                </div>
            </div>
        );
    }
}

export default Content;