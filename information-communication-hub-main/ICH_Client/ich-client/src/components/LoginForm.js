import React, { Component } from "react";
import { useNavigate } from 'react-router-dom'
import "../App.css"

export function LoginLayout(props) {
    const navigate = useNavigate();

    const routeChange = (path) =>{ 
        navigate(path);
    }

    return (
        <LoginForm 
            onRouteChange={routeChange}
            onSubmitButton={props.onSubmitButton}
        />
    )
}

class LoginForm extends Component {
    constructor(props){
        super(props)

        this.initials = ""
        this.password = "" 
    }

    updateInitials(e){
        this.initials = e.target.value
    }

    updatePassword(e){
        this.password = e.target.value
    }

    render() {
        return (
            <div className=" pt-4 pb-4">
                <form >
                    <br />
                    <div className="container App-login-view">
                        <div className="form-group">
                            <label htmlFor="userInitials">Enter your name and surname</label>
                            <input type="text" className="form-control" id="userInitials" placeholder="Name Surname" 
                                onChange={evt => this.updateInitials(evt)} />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label className="col-10 " htmlFor="password" >Enter your password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" 
                                onChange={evt => this.updatePassword(evt)} />
                        </div>
                        <br />
                    </div>

                    <hr className="App-hr" />
                    <div className="row d-flex justify-content-center">
                        <div className="col-3">
                            <button className="btn btn-dark rounded border-light App-button our-button" 
                                onClick={(e)=>{
                                    e.preventDefault();
                                   
                                    this.props.onRouteChange("/")
                                }}>
                            Back
                            </button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-dark rounded border-light App-button our-button" 
                                onClick={ async (e)=> {
                                    e.preventDefault();

                                    if (this.initials === "" || this.password ===""){
                                        alert("Failed")
                                        return
                                    }
                                    var userData = {
                                        initials: this.initials,
                                        password: this.password,
                                    }
                                    let ok = await this.props.onSubmitButton(userData)
                                    if (ok) this.props.onRouteChange("/")

                                }} >
                                Continue
                            </button>
                        </div>
                    </div>
                    <br />
                </form>
            </div>
        )
    }

}