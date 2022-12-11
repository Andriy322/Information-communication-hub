import React, {Component} from "react";
import "../App.css"
import { RegistrationLayout } from "../components/RegistrationForm";
import { RegisterUser, UpdateAssistanceData } from "../ServerApi";



export class Signup extends Component{
    constructor(props){
        super(props)

        this.state = {
            isSuccess: false,
            failed: false
        }
        this.onSubmitButton = this.onSubmitButton.bind(this)
    }

    async onSubmitButton(data){
        //
        //validate user from front-end side
        //
        if( data.isFirstPage ){
            let responce = await RegisterUser(data)

            if (responce.status === 400 ){
                alert("Failed to Register. Please check if your credentials are correct")
                return false
            }
            else if (responce.status !== undefined){
                alert("Server error. Please try again")
                return false
            } else{
                this.props.userRegister(responce)
                return true
            }

        } else {
            //add assistance
            data.userId = this.props.userId
            let responce = await UpdateAssistanceData(data);

            if (responce.status === 400 ){
                alert("Failed to set assistance")
                return false
            }
            /*else if (responce.status !== undefined){
                alert("Server error")
                return false
            } */
            else{
                this.props.assistanceUpdated(responce)
                return true
            }

        }


    }


    render(){
        return(
            <div className="container"> 
            <h6 className="text-left">Home - Register</h6>
            <div className="container rounded  App-form">
                <RegistrationLayout 
                    onSubmitButton={this.onSubmitButton}/>
            </div>
        </div>
        )
    }
}