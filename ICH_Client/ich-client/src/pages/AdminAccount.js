import React, {Component} from "react";

export class AdminAccount extends Component{
    constructor(props){
        super(props)

        this.state={
            userToken:{}
        }
    }

    fetchAllUsersTokenData(){
        //implement GET request to server
    }

    componentDidMount(){
        this.fetchUserTokenData()
    }

    render(){
        return(
            <div> 
                <h3>It is a Admin Account page</h3>
            </div>
        )
    }
}