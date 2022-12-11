import React, {Component} from "react";
import { HomeInfoView } from "../components/HomeInfoView";



export class Home extends Component{
    render(){
        return(
            <div className="container"> 
                <h6 className="text-left">Home</h6>
                <div className="container rounded border border-primary App-form ">
                    <HomeInfoView/>
                </div>  
            </div>
        )
    }
}
