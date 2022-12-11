import React, { Component } from "react";
import "../App.css"


export class PersonalInfoView extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <img className="App-avatar" src="person_2.png" alt="User Avatar" />
                </div>
                <div>
                    <NameSurname 
                        userInfo={this.props.userInfo}
                        isAdmin={this.props.isAdmin} 
                    />
                </div>
                <FirstButton 
                    isAdmin={this.props.isAdmin}
                    selectedOption={this.props.selectedOption}
                />
                <SecondButton 
                    isAdmin={this.props.isAdmin} 
                    selectedOption={this.props.selectedOption}
                />
            </div>
        )
    }
}

function NameSurname(props) {
    if(!("initials" in props.userInfo) || props.userInfo.initials === ""){
        return <h6>No Name</h6>
    } else if ( !props.isAdmin ) {
        return <h6>{props.userInfo.initials}</h6>
    } else {
        return <h6>{props.userInfo.initials}. Admin</h6>
    }
}

function FirstButton(props) {
    var text;
    if (props.isAdmin) {
        text = "Get requests"
    } else {
        text = "Update personal info"
    }
    return (
        <div className="p-1">
            <button className="btn btn-light rounded  App-button"
                disabled={ props.selectedOption !== 1 }>
                {text} 
            </button>
        </div>
    )
}

function SecondButton(props) {
    var text = "Update assistance types"
    return (
        
        <div className="p-1">
            <button className="btn btn-light rounded  App-button"
                disabled={ props.selectedOption !== 2 }>
                {text} 
            </button>
        </div>
    )
}