import axios from "axios";
import React from "react"
import "./style.css"

export default class App extends React.Component {
    state = {
        data: [],
        inputVal: "",
    }

     
    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
        inputVal:e.target.value

        })
    }

    
    handleClick = (e) => {    
        console.log(e,"heloo worlds");
        var temp=this.state.inputVal
        if(temp==""){
            alert("Please Fill the Input")
        }
        else{
        this.setState({
            inputVal:temp
        })
    
    }
    { this.componentDidMount()}
    }
    
    

    componentDidMount() {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.state.inputVal).then((res) => {
            console.log(res.data.meals, "test");

            var data = res.data.meals
            this.setState({
                data: data
            })
        })
    }
   
    render() {
        return (
            <div  className="text-center mt-5">

                
                <input type="text" placeholder="  Enter Your Order" onChange={this.handleChange} />
                <button onClick={this.handleClick} className="btn1">Click Here</button>
            <div className="d-flex flex-wrap justify-content-between ml-5 mr-5">
                {this.state.data.map((obj) => {
                    return (
                        <div>
                            

                            <div class="card mt-5" style={{width: "21rem"}}>
                                <img class="card-img-top" src={obj.strMealThumb} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{obj.strArea}</h5>
                                        <p class="card-text">{obj.strMeal}</p>

                                        <div className="divs">
                        <ul className="uls">
                            <p><b>"INGREADIENT"::: "MEASUMENT"</b></p>
                            <li className="list"> {obj.strIngredient1}::  ::{obj.strMeasure1} </li>
                            <p><b>"INGREADIENT"::: "MEASUMENT"</b></p>
                            <li> {obj.strIngredient2}::  ::{obj.strMeasure2} </li>
                            <p><b>"INGREADIENT"::: "MEASUMENT"</b></p>
                            <li> {obj.strIngredient3}::  ::{obj.strMeasure3} </li>

                            <p><b>"INGREADIENT"::: "MEASUMENT"</b></p>
                            <li> {obj.strIngredient5}::  ::{obj.strMeasure4} </li>

                            <p><b>"INGREADIENT"::: "MEASUMENT"</b></p>
                            <li> {obj.strIngredient5}::  ::{obj.strMeasure5} </li>
                            <p><b>"INGREADIENT"::: "MEASUMENT"</b></p>
                            <li> {obj.strIngredient6}::  ::{obj.strMeasure6} </li>
                        </ul>
                                        </div>

                                        <a href={obj.strYoutube}><img src="./pics.png" className="imge"/></a>
                                    </div>
                            </div>
                        </div>

                    )
                })}
            </div>
            </div>
        )
    }
}