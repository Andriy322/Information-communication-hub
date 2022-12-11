import React, {Component} from "react";
import { HomeInfoView } from "../components/HomeInfoView";



export class Home extends Component{
    render(){
        return(
            <div className="container"> 
                <h6 className="text-left home-Title">Home page</h6>
                <div className="container rounded App-form ">
                    <HomeInfoView/>
                </div>  
            </div>
        )
    }
}
