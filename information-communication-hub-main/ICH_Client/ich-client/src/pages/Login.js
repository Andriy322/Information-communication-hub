import React, {Component} from "react";
import { LoginLayout } from "../components/LoginForm";


import { LoginUser } from "../ServerApi";


export class Login extends Component{
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
        //validate user with front-end side
        //

        const responce = await LoginUser(data)
        
        if (responce.status === 400 ){
            alert("Failed to login. Please check if your credentials are correct")
            return false
        }
        else if (responce.status !== undefined){
            alert("Server error. Please try again")
            return false
        } else{
            this.props.userLogin(responce)
            return true
        }
    }



    render(){
        if(this.props.isLogined) {
            this.props.userLogout()
        }

        return(
            <div className="container"> 
                <h6 className="text-left">Home/Login</h6>
                <div className="container rounded  App-form ">
                    <LoginLayout onSubmitButton={this.onSubmitButton}/>
                </div>  
            </div>
        )
    }
}
