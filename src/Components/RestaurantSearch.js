import React, { Component} from 'react';
import getResaurants from '../APIs/YelpAPI';

export default class RestaurantSearch extends Component{
    constructor(){
        super();

        this.state={
            finalRestaurant: {},
            zipCode:"",
            foodType:"",
            rating:"",
    };

 
}

// Pull up a random restaurant based on the users input of zip code, food type, and rating
generateRestaurant(){
// we want the user to input the zipcode they want to search, the food type they want to eat
// and the rating (1-5)  
// getRestaurants()


}


getZipCode(zipCode){
    this.setState({
        zipCode: zipCode,
    
    });
    console.log(zipCode);
}

getFoodType(food){
    this.setState({
        foodType: food,
    })
}


//Below we are prompting the user to input a ZipCode, Food Type and Rating upon changing the state, the result will appear


render(){
    return(
     <div>   
        <div className= "RevealFood">
             <h1> Let's Eat! </h1>
        </div>     
        <div className="FoodPic">
            <img src={this.state.food }/>
        </div>

        
        <input type="text" onChange={(e)=>{this.getZipCode(e.target.value)}} />
        <input type="text" onChange={(e)=>{this.getFoodType(e.target.value)}}/>


       <button onClick={()=> {this.generateRestaurant();}}> Stop the Fighting</button>
     </div>     
        );        
}
}

